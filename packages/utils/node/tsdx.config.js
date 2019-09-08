const config = require('../../../tsdx.config');
const pjson = require('./package.json');
module.exports = {
  ...config(pjson),
};
