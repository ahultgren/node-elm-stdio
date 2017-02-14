"use strict";

var document = require("min-document");

global.document = document;

var decode = function (str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

module.exports = function (Elm, data, name, encode, callback) {
  var rootNode = document.createElement("div");
  Elm[name].embed(rootNode, data);
  setTimeout(() => {
    var result = encode ? rootNode.toString() : decode(rootNode.toString());
    callback(null, result.substring(5, result.length - 6));
  }, 0);
};
