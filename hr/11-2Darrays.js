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
  const arr = Array(6)

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))
  }
  let biggest = -Infinity
  let sum = 0
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      sum = (arr[j][i] + arr[j][i + 1] + arr[j][i + 2] + arr[j + 1][i + 1] + arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2])
      if (sum > biggest) biggest = sum
    }
  }
  console.log(biggest)
}
