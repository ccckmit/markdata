var fs = require("fs");
var M = require("../markdata");

var mdt = fs.readFileSync("../data/test1.mdt", "utf8");
console.log("=============markdown=============\n", M.toMarkdown(mdt));
console.log("=============JSON=============\n", M.toJson(mdt));
