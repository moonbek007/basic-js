const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  try {
    const check = date.getMonth();
  } catch (err) {
    throw new Error(err);
  }
  if (date.getMonth() > 1 && date.getMonth() <= 4) {
    return "winter";
  } else if (date.getMonth() > 4 && date.getMonth() <= 7) {
    return "spring";
  } else if (date.getMonth() > 7 && date.getMonth() <= 10) {
    return "autumn";
  } else if (date.getMonth() > 10 || date.getMonth() <= 1) {
    return "winter";
  }
};
