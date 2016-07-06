module.exports.modOne = getRandomNumber;




function getRandomNumber() {
  return Math.floor(Math.random() * (1000000 - 100)) + 100;
}
