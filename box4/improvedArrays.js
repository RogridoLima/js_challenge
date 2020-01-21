Array.prototype.quickSort = function() {
 
  const arraySize = this.length;

  const virtualArray = Array.from(this);

  for (let currentIndex = 0; currentIndex < arraySize; currentIndex++) {
    let currentNumber = virtualArray[currentIndex]

    let lesserNumbers = []
    let greaterNumbers = [];

    for (let comparingIndex = 0; comparingIndex < arraySize; comparingIndex++) {
      if (comparingIndex === currentIndex) continue;

      let comparingNumber = virtualArray[comparingIndex];

      currentNumber > comparingNumber ? lesserNumbers.push(comparingNumber) : greaterNumbers.push(comparingNumber);
    }
    
    this[lesserNumbers.length] = currentNumber;
  }

  return this;
  
}