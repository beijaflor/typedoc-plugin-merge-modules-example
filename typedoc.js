var { sync } = require("glob");
const { resolve } = require("path");

// TODO: https://github.com/christopherthielen/typedoc-plugin-external-module-name をインストールしたい

module.exports = {
  // entryPoints: sync(resolve("src/**/*{.js,.ts}")),
  out: "docs/",
  categorizeByGroup: true,
  // markedOptions: {
  //   gfm: true,
  //   mangle: true,
  // },
};
