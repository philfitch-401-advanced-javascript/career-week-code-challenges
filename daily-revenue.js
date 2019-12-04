
function revenue(transactions) {
  let result = {};
  const dates = transactions.map(obj => {
    let date = new Date(obj.timestamp).toUTCString();
    date = date.split(' ');
    let newDateArray = [];
    newDateArray.push(date[0].slice(0, 3));
    newDateArray.push(date[2]);
    newDateArray.push(date[1]);
    newDateArray.push(date[3]);
    date = newDateArray.join(' ');
    return {
      price: obj.price,
      date: date
    }
  })
  for(let i = 0; i < dates.length; i++) {
    let key = dates[i].date;
    result[key] ? result[key] += dates[i].price : result[key] = dates[i].price;
  }
  return result;
};

module.exports = revenue;