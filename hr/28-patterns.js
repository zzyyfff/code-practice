'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
  inputString += inputStdin
})

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''))

  main()
})

function readLine () {
  return inputString[currentLine++]
}

function main () {
  const N = parseInt(readLine(), 10)
  const firstNames = []
  for (let NItr = 0; NItr < N; NItr++) {
    const firstNameEmailID = readLine().split(' ')
    if (firstNameEmailID[1].slice(-10) === '@gmail.com') {
      firstNames.push(firstNameEmailID[0])
    }
  }
  firstNames.sort()
  for (let i = 0; i < firstNames.length; i++) {
    console.log(firstNames[i])
  }
}
