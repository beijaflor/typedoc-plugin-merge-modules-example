var { sync } = require("glob");
const { resolve } = require("path");

module.exports = {
  entryPoints: sync(resolve("src/**/*{.js,.ts}")),
  out: "docs/",
  categorizeByGroup: true,
  markedOptions: {
    gfm: true,
    mangle: true,
  },
};
