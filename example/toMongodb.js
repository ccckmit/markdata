var fs = require("fs");
var M = require("../markdata");

var mdt = fs.readFileSync(process.argv[2], "utf8");
var list = M.toList(mdt);
console.log("=============JSON=============\n%j", list);
M.toMongodb("markdata", "objects", list);

