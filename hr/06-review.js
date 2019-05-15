function processData (input) {
  // Enter your code here
  const inputArray = input.split('\n')
  for (let i = 1; i <= +inputArray[0]; i++) {
    console.log(inputArray[i].split('').filter((e, i) => i % 2 === 0).join('') + ' ' + inputArray[i].split('').filter((e, i) => i % 2 === 1).join(''))
  }
}

module.exports = processData
