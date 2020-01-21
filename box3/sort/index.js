const superSort = (initialArray) => {
  const arraySize = initialArray.length;

  const sortedArray = new Array(arraySize).fill('');

  for (let currentIndex = 0; currentIndex < arraySize; currentIndex++) {
    let currentNumber = initialArray[currentIndex]

    let lesserNumbers = []
    let greaterNumbers = [];

    for (let comparingIndex = 0; comparingIndex < arraySize; comparingIndex++) {
      if (comparingIndex === currentIndex) continue;

      let comparingNumber = initialArray[comparingIndex];

      currentNumber > comparingNumber ? lesserNumbers.push(comparingNumber) : greaterNumbers.push(comparingNumber);
    }
    
    sortedArray[lesserNumbers.length] = currentNumber;
  }

  return sortedArray;
}

module.exports = superSort;