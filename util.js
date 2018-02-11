var dateParser = dateStr => {
  var d = new Date(dateStr);
  return (Math.floor(d.getTime() / 1000) ).toString();
}

module.exports = {
  dateParser
}
