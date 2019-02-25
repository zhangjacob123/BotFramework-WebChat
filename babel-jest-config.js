const fs = require('fs');
const path = require('path');

const stringifiedBabelRc = fs.readFileSync(path.join(__dirname, '.babelrc')).toString();
const babelOptions = JSON.parse(stringifiedBabelRc);
const transformer = require('babel-jest');

const { createTransformer } = transformer;
const thisTransformer = createTransformer(babelOptions);

Object.assign(transformer, thisTransformer);
transformer.createTransformer = () => {
  return thisTransformer
};
module.exports = transformer;
