# node-elm-stdio

## Installation

* `npm install ahultgren/node-elm-stdio` (use -s or -g flags to your taste)

## Usage

### Use your own module from the command-line

1. Create a file in e.g. `bin/do-stuff`:
  ```
  #!/usr/bin/env bash

  elm-stdio ./dist/path-to-compiled-elm.js | grep "magic"
  ```

2. Add the following to your `package.json`:
  ```
  "bin": {
    "do-stuff": "./bin/do-stuff"
  }
  ```

3. Use like: `do-stuff`

### CLI

```
> elm-stdio --help

Example: elm-stdio ./elm.js

	--help, -h
		Displays help information about this script
		'elm-stdio -h' or 'elm-stdio --help'

	--version
		Displays version info
		elm-stdio --version

	--name, -n
		Name of the exposed module to call
		'elm-stdio --name=Main'

	--encode, -e
		Set if you want to get text-entries like <>& as &lt; &gt; &amp;
		'elm-stdio --encode=1'
```

### Programmatically

```
var stdio = require("node-elm-stdio");
var Elm = require("./dist/my-elm.js");
var flags = "Whatever you want";

stdio(Elm, flags, function (err, data) {
  console.log("This will be normal string:", data);
});
```
