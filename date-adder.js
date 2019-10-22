const moment = require('moment');



function add(date, diff) {
  let number = diff.slice(0, -1);
  let unit = diff.slice(-1);
  return new Date(moment(date).add(number, unit));
};

module.exports = add;