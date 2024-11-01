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
  words(str) {
    return str.split(' ')
  },
  pad(str, len) {
    if (len <= str.length) {
      return str
    }
    const startPaddingLength = Math.floor((len - str.length) / 2);
    const endPaddingLength = len - str.length - startPaddingLength
    const paddedString = `${' '.repeat(startPaddingLength)}${str}${' '.repeat(endPaddingLength)}`
    return paddedString
  },
  has(obj, key) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, key)
  },
  invert(obj) {
    const result = {}
    for (key in obj) {
      result[obj[key]] = key
    }
    return result
  },
  findKey(obj, predicate) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && predicate(obj[key], key, obj)) {
        return key;
      }
    }
    return undefined;
  },
  drop(arr, n = 1) {
    return arr.slice(n)
  }
}

// Do not write or modify code below this line.
module.exports = _;