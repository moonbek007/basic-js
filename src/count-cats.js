const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let answer = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === "^^") {
        answer += 1;
      }
    }
  }
  return answer;
};

// console.log(
//   countCats([
//     ["##", "dd", "00"],
//     ["^^", "..", "ss"],
//     ["AA", "dd", "Oo"],
//   ]) === 1
// );

// console.log(
//   countCats([
//     ["##", "dd", "00"],
//     ["^ ^", "..", "ss"],
//     ["AA", "dd", "Oo"],
//   ]) === 0
// );

// console.log(
//   countCats([
//     ["##", "dd", "00"],
//     [" ^^ ", "..", "ss"],
//     ["AA", "dd", "Oo"],
//   ]) === 0
// );

// console.log(
//   countCats([
//     ["##", "dd", "00"],
//     ["^", "^", "ss"],
//     ["AA", "dd", "Oo"],
//   ]) === 0
// );

// console.log(countCats([]) === 0);

// console.log(
//   countCats([
//     ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//     [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//     [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//     [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//     [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//     [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//     [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//     [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//   ]) === 16
// );
// console.log(
//   countCats([
//     ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
//     [2, NaN, "", false, "^^", "^^"],
//     [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//     ["."],
//     [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//     [false, NaN, 1, 0, ".", "^^"],
//     [null, 1, NaN],
//     [],
//   ]) === 8
// );
