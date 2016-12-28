module.exports = {
  isJuf: function(number) {
    if (number % 7 === 0) {
      return isJuf = true;
    } else if (number % 10 === 7) {
      return isJuf = true;
    } else {
      return isJuf = false;
    }
  }
};
