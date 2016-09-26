"use strict";

var Node = require("./node");

Node.globalDocument();

module.exports = function (Elm, data, name, callback) {
  var rootNode = new Node();
  Elm[name].embed(rootNode, data);
  setTimeout(() => {
    callback(null, rootNode.stringify());
  }, 0);
};
