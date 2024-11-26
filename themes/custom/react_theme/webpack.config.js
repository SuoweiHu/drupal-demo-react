
const path = require("path");                       // This line imports Node.js's built-in path module, which provides utilities for working with file and directory paths. It's used later in the configuration to ensure that paths are resolved correctly, regardless of the operating system.
module.exports = {
  devtool:  "source-map",                           // The devtool option controls how source maps are generated. "source-map" creates a separate source map file, which helps in debugging by mapping the bundled code back to the original source code.
  mode:     "development",                          // The mode option specifies the mode in which Webpack should run. "development" enables optimizations for faster build times and more readable output, which is useful during development. Alternatively, "production" would enable optimizations for smaller file sizes.
  resolve:  {extensions:[".js",".jsx"]},            // The resolve option specifies the file extensions Webpack will resolve when importing modules. This means you can import files without specifying their extensions if they are .js, .jsx, or .ts.
  entry:    {                                       // The entry property defines the entry points for your application.
    tile:["./js/src/component_tile/index.jsx"],     // ⤷ Here, an entry point named tile  is defined, which includes the file ./js/src/component_tile/index.jsx.   Webpack will start building the dependency graph from this file.
  },
  output: {                                         // The output section specifies where the bundled files should be output
    path:      path.resolve(__dirname, "js/dist"),  // ⤷ path: The output directory for the bundled files, resolved to an absolute path using path.resolve(). __dirname is a Node.js variable that gives the directory name of the current module, ensuring the path is correctly resolved.
    filename: "[name].min.js",                      // ⤷ filename: The name of the output file. [name] is a placeholder that will be replaced by the name of the entry point (e.g., tile), resulting in tile.min.js as the output file.
  },
  module: {                                         // The module property contains rules that define how different types of modules should be treated.
    rules: [                                        // ⤷ rules: An array of rules for module processing.
      { test: /\.jsx?$/,                            //    ⤷ test:     A regular expression that matches file names. Here, it matches files with .js or .jsx extensions.
        loader: "babel-loader",                     //    ⤷ loader:   Specifies the loader to use for the matched files. babel-loader is used here to transpile JavaScript files using Babel, which allows you to use modern JavaScript features.
        exclude: /node_modules/,                    //    ⤷ exclude:  Excludes files in the node_modules directory from being processed by babel-loader, which is a common practice to improve build performance.
        include: path.join(__dirname, "js/src") }   //    ⤷ include:  Specifies the directory to include for processing, ensuring only your source files are processed by Babel.
    ]
  }
};