const getNthElement = (index, array) => {
    if (index > array.length - 1) {
        return getNthElement((index - array.length), array);
    }
    return array[index];
};

const arrayToCSVString = (array) => {
    return array.join(',');
};

const csvStringToArray = (string) => {
    return string.split(',');
};

const addToArray = (element, array) => {
    array.push(element);
};

const addToArray2 = (element, array) => {
    return array.concat(element);
};

const removeNthElement = (index, array) => {
    array.splice(index, 1);
    return array;
};
const numbersToStrings = (numbers) => {
    return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
    return strings.map((item) => item.toUpperCase())
};
const reverseWordsInArray = (strings) => {
    return strings.map((item) => item.split("").reverse().join(""));
};

const onlyEven = (numbers) => {
    return numbers.filter((item) => item % 2 !== 1);
};


const removeNthElement2 = (index, array) => {
    const newArray = [...array]
    newArray.splice(index, 1);
    return newArray;

};

const elementsStartingWithAVowel = (strings) => {
    return strings.filter(item => {
        return (item.substring(0, 1)).match(/[aeiou]/i) ? true : false;
    });
};


const removeSpaces = (string) => {
    return string.split(' ').join('');
};

const sumNumbers = (numbers) => {
    return numbers.reduce(function (a, b) {
        return a + b
    });
};

const sortByLastLetter = (strings) => {
    return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
    getNthElement,
    arrayToCSVString,
    csvStringToArray,
    addToArray,
    addToArray2,
    removeNthElement,
    numbersToStrings,
    uppercaseWordsInArray,
    reverseWordsInArray,
    onlyEven,
    removeNthElement2,
    elementsStartingWithAVowel,
    removeSpaces,
    sumNumbers,
    sortByLastLetter,
};
