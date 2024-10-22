const _ = {
  clamp(number, lower, upper) {
    return Math.min(Math.max(number, lower), upper);
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start
      start = 0
    }
    if (start > end) {
      const temp = end
      end = start
      start = temp
    }
    return start <= number && number < end
  },
  words (str) {
    return str.split(' ')
  },
  pad (str, len) {
    if (len <= str.length) {
      return str
    }
    const startPaddingLength = Math.floor((len - str.length) / 2);
    const endPaddingLength = len - str.length - startPaddingLength
    const paddedString = `${' '.repeat(startPaddingLength)}${str}${' '.repeat(endPaddingLength)}`
    return paddedString
  }
}

// Do not write or modify code below this line.
module.exports = _;