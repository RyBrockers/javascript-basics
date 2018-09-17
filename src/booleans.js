const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  if (a || b) {
    return false;
  } else {
    return true;
  }
};

const one = (a, b) => {
  if (a != b) {
    return true;
  } else {
    return false;
  }
};

const truthiness = (a) => {
  return !!a;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  if (a % 2) {
    return true;
  } else {
    return false;
  }
};

const isEven = (a) => {
  if (a % 2) {
    return false;
  } else {
    return true;
  }
};

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0;
}

const startsWith = (char, string) => {


  return string.startsWith(char);

};

const containsVowels = (string) => {

  return (string.substring(string)).match(/[aeiou]/i) ? true : false;

};

const isLowerCase = (string) => {
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }



};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
