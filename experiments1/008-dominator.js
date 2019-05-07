'use strict'

function solution (A) {
  let stackSize = 0
  let candidate = null
  let count = 0

  for (let i = 0; i < A.length; i++) {
    if (stackSize === 0) {
      stackSize++
      candidate = A[i]
    } else {
      if (candidate !== A[i]) {
        stackSize--
      } else {
        stackSize++
      }
    }
  }
  if (stackSize === 0) return -1
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) count++
  }
  return count > Math.floor(A.length / 2) ? candidate : -1
}

module.exports = solution
