"use strict";

var path = require("path");
var stdio = require("./stdio");

module.exports = function stdin (target, name, encode) {
  if(!target) {
    process.stderr.write("No target specified\n");
    process.exit(1);
  }

  if(!name) {
    process.stderr.write("No name specified\n");
    process.exit(1);
  }

  // Load module
  var Elm = require(path.resolve(process.cwd(), target));

  // Wait for data to be piped
  var data = "";

  process.stdin.on("data", function (chunk) {
    data += chunk;
  });

  process.stdin.on("end", function () {
    // Treat all output as error
    var err = "";
    var _write = process.stdout.write.bind(process.stdout);

    process.stdout.write = (msg) => {
      err += msg;
    };

    // Invoke elm module
    stdio(Elm, data, name, encode, function (_, response) {
      if(err) {
        process.stderr.write("error");
        process.stderr.write(err);
        process.exitCode = 1;
      }
      else {
        _write(response);
      }
    });
  });

}
