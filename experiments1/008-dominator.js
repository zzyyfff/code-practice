'use strict'

function solution (A) {
  let stackSize = 0
  let candidateIndex = null
  let count = 0

  for (let i = 0; i < A.length; i++) {
    if (stackSize === 0) {
      stackSize++
      candidateIndex = i
    } else {
      if (A[candidateIndex] !== A[i]) {
        stackSize--
      } else {
        stackSize++
      }
    }
  }
  if (stackSize === 0) return -1
  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[candidateIndex]) count++
  }
  return count > Math.floor(A.length / 2) ? candidateIndex : -1
}

module.exports = solution
