const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i + 1 < arr.length) {
          answer.push(a[i + 1]);
          answer.push(a[i + 1]);
          i += 2;
        }
        break;
      case "--double-prev":
        if (i !== 0) {
          const temp = answer.pop();
          answer.push(temp);
          answer.push(temp);
        }
        break;
      case "--discard-prev":
        if (i !== 0) {
          answer.pop();
        }
        break;
      case "--discard-next":
        if (i + 1 < arr.length) {
          i += 2;
        }
        break;
      default:
        answer.push(arr[i]);
    }
  }
  return answer;
};
