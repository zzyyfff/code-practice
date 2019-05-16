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
  const n = parseInt(readLine(), 10)

  const binArr = n.toString(2).split('')
  let count = 0
  let biggest = 0
  for (const i in binArr) {
    if (binArr[i - 1] !== '1' && binArr[i] === '1') {
      count = 1
    } else if (count && binArr[i] === '1') {
      count++
    } else {
      if (count > biggest) {
        biggest = count
      }
      count = 0
    }
  }
  console.log(biggest > count ? biggest : count)
}
