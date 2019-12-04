// const moment = require('moment');



// function add(date, diff) {
//   let number = diff.slice(0, -1);
//   let unit = diff.slice(-1);
//   return new Date(moment(date).add(number, unit));
// };

function add(date, diff) {
  let number = diff.slice(0, -1);
  let unit = diff.slice(-1);

  switch(unit) {
    case 'y':
      let year = date.getYear();
      year+=+number;
      return new Date(date.setYear(year));
    case 'M':
      let month = date.getMonth();
      month+=+number;
      return new Date(date.setMonth(month));
    case 'w':
      let week = date.getDate();
      week+=(+number*7);
      return new Date(date.setDate(week));
    case 'd':
      let day = date.getDate();
      day+=+number;
      return new Date(date.setDate(day));
    case 'h':
      let hour = date.getHours();
      hour+=+number;
      return new Date(date.setHours(hour));
    case 'm':
      let minute = date.getMinutes();
      minute+=+number;
      return new Date(date.setMinutes(minute));
    case 's':
      let second = date.getHours();
      second+=+number;
      return new Date(date.setHours(second));
  };
};

module.exports = add;