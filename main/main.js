module.exports = function main(input) {
  // Write your code here
  var num = parseInt (input), result = 0;
  while (num > 0)
  {
	  result += num % 10; //加最右位
	  num = parseInt (num / 10); //去掉最右位
  }
  return result;
};
