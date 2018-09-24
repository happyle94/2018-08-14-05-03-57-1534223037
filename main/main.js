module.exports = function main(input) {
  // Write your code here
  var num = parseInt (input), result = 0;//parseInt：解析一个字符串并返回一个整数，result：存放字符串求和的结果
  while (num > 0)
  {
	  result += num % 10; //把字符串最右边的一位所代表的数字加入结果中
	  num = parseInt (num / 10); //去掉最右位，即从下一个循环起开始处理更高一位的数字
  }
  return result;
};
