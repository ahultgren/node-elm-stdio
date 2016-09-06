"use strict";

var Node = require("./node");

Node.globalDocument();

module.exports = function (Elm, data, callback) {
  var rootNode = new Node();
  Elm.Generate.embed(rootNode, data);
  setTimeout(() => {
    callback(null, rootNode.stringify());
  }, 0);
};
