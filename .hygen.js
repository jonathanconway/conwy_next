const { basename, dirname, join } = require("path");
const { startCase, last } = require("lodash");

const ROOT_DIR = "./";

function dir() {
  return join(ROOT_DIR, dirname(last(process.argv)));
}

function name() {
  return basename(last(process.argv)).split(".")[0];
}

function namePascal() {
  return startCase(name()).replaceAll(" ", "");
}

function nameSentence() {
  const startCaseLower = startCase(name())
  return `${startCaseLower[0].toUpperCase()}${startCaseLower.substring(1)}`
}

//.hygen.js
module.exports = {
  templates: `${__dirname}/_templates`,
  helpers: {
    dir,
    name,
    namePascal,
    nameSentence,
  }
}