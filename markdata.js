var fs = require("fs");
var M = module.exports = {}
var MongoClient = require('mongodb').MongoClient;
var co = require("co");

M.parse = function(markdata, out) {
	var lines = markdata.split(/\r?\n/);
	var id="", table=[], object=[], markdown=[], len=lines.length;
	for (var i=0; i<len; i++) {
		var line = lines[i];
		if (line.startsWith("#")) { // id
		  if (markdown.length > 0) out(id, 'markdown', markdown.join("\n"));
		  id = line.trim();
			out(id, 'id', id);
			markdown = [];
		} else if (line.startsWith("{")) { // object
			for (object = []; i<len; i++) {
				object.push(lines[i]);
				if (lines[i].startsWith("}"))
					break;
			}
			out(id, 'object', object.join('\n'));
		} else if (line.indexOf("|")>=0 && lines[i+1].match(/^-+$/)) { // table
			for (table = []; i<len && lines[i].trim() !== ""; i++) {
				table.push(lines[i]);
			}
			out(id, 'table', table.join('\n'));
		} else {
			if (line.trim().length>0) 
				markdown.push(line);
		}
	}
	if (markdown.length > 0) out(id, 'markdown', markdown.join("\n"));
}

M.table2markdown = function(table) {
	var markdown = [], lines = table.split(/\n/);
	for (var i=0; i<lines.length; i++) {
		if (lines[i].startsWith("-")) {
			markdown.push("|"+lines[0].replace(/[^|]/g, '-')+"|");
		} else {
			markdown.push("|"+lines[i].trim()+"|");
		}
	}
	return markdown.join("\n");
}

M.object2json = function(object) {
	var json = object.replace(/(\s)([^"',\s]+):/gm, ',$1"$2":')   // id: => "id":
	                 .replace(/:\s*([^"'\[\{\}\],\r\n\s]+)/gm, ':"$1"') // v:  => :"v"
									 .replace(/([\{\[])\s*,/gm, "$1");
									 
	try {
		JSON.parse(json);
	} catch (e) {
		console.log("e=", e);
		console.log(e.stackTrace);
		console.log("json=%s", json);
	}
	return json;
}

M.object2markdown = function(object) {
	return '```object\n'+object+'\n```';
}

M.table2json = function(table) {
	var lines = table.split(/\n/), len = lines.length;
	var jsonTable = [], fields=lines[0].split(/\s*\|\s*/);
	for (var i=2; i<len; i++) {
		var values=lines[i].split("|"), vlen = values.length, json={};
		for (var vi=0; vi<vlen; vi++) {
			json[fields[vi]] = values[vi].trim();
		}
		jsonTable.push(json);
	}
	return jsonTable;
}

M.toMarkdown = function(markdata) {
	var out = {
		list:[],
		get:function(id, type, text) {
			var obj;
			switch (type) {
				case "id": obj = "#"+id; break;
				case "table": obj = M.table2markdown(text); break;
				case "object": obj = M.object2markdown(text); break;
				case "markdown": obj = text; break;
			}
			this.list.push(obj);
		}
	}
	M.parse(markdata, out.get.bind(out));
	return out.list.join('\n\n');
}

M.toList = function(markdata) {
	var out = {
		list:[],
		get:function(id, type, text) {
			var obj;
			switch (type) {
				case "id": obj = id; return;
				case "table": obj = { id:id, type:type, content:M.table2json(text) }; break;
				case "object": obj = { id:id, type:type, content:JSON.parse(M.object2json(text)) }; break;
				case "markdown": obj = { id:id, type:type, content:text }; break;
			}
			this.list.push(obj);
		}
	}
	M.parse(markdata, out.get.bind(out));
	return out.list;
}

M.toJson = function(markdata) {
	return JSON.stringify(M.toList(markdata), null, 2);
}

// ref : http://stackoverflow.com/questions/24122981/how-to-stop-insertion-of-duplicate-documents-in-a-mongodb-collection
// ref : https://mongodb.github.io/node-mongodb-native/markdown-docs/indexes.html
// 
M.toMongodb = function(dbName, tableName, list) {
co(function*() {
  var db = yield MongoClient.connect('mongodb://localhost:27017/'+dbName);
  var table = db.collection(tableName);
	for (var i=0; i<list.length; i++) {
		yield table.update(list[i], list[i], {upsert:true});
	}
	yield table.ensureIndex({"$**":"text"}, {name:"FullTextIndex"});
  var result = yield db.close();
});
}

M.queryMongodb = function(dbName, tableName, query) {
co(function*() {
  var db = yield MongoClient.connect('mongodb://localhost:27017/'+dbName);
  var table = db.collection(tableName);
  var items = yield table.find(query).toArray();
  console.log("items=%j", items);
  var result = yield db.close();
});
}
