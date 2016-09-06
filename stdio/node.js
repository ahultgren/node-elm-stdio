"use strict";

/*
 * Very basic DOM Node mock.
 */

function Node (x) {
  this.children = [];

  if(x !== undefined) {
    this.appendChild(x);
  }
}

Node.prototype.appendChild = function (x) {
  this.children.push(x);
  return this;
};

Node.prototype.stringify = function () {
  return this.children.map(function (c) {
    if(c.stringify) {
      return c.stringify();
    }
    else {
      return c;
    }
  }).join("");
};

module.exports = exports = Node;

exports.globalDocument = function () {
  global.document = {
    createTextNode: function (x) {
      return new Node(x);
    }
  };
};
