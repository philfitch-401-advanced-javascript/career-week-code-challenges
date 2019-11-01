
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
    let newDateString = newDateArray.join(' ');
    result.newDateString? newDateString += obj.price : result.newDateString = obj.price;
  })
  
  return result;
};

module.exports = revenue;