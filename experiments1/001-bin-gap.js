'use strict'

function solution (N) {
  const binArr = N.toString(2).split('')
  let count = 0
  let biggest = 0
  for (const i in binArr) {
    if (binArr[i - 1] === '1' && binArr[i] === '0') {
      count = 1
    } else if (count && binArr[i] === '0') {
      count++
    } else {
      if (count > biggest) {
        biggest = count
      }
      count = 0
    }
  }
  return biggest
}

module.exports = solution
