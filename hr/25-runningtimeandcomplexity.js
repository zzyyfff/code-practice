function processData (input) {
  // Enter your code here
  const inputArray = input.split('\n').map(e => +e)
  for (let i = 1; i < inputArray.length; i++) {
    isPrime(inputArray[i]) ? console.log('Prime') : console.log('Not prime')
  }
}

function isPrime (n) {
  if (n === 1) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  const end = Math.floor(Math.sqrt(n)) + 1
  for (let i = 3; i < end; i += 2) {
    if (n % i === 0) return false
  }
  return true
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
  _input += input
})

process.stdin.on('end', function () {
  processData(_input)
})
