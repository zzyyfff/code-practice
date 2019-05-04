'use strict'

function solution (A) {
  let eastCount = 0
  let passing = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i]) {
      passing += eastCount
    } else {
      eastCount++
    }
    if (passing > 1000000000) return -1
  }
  return passing
}

module.exports = solution
