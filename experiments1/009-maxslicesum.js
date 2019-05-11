'use strict'

function solution (A) {
  let maxEnding = A[0]
  let maxSlice = A[0]
  for (let i = 1; i < A.length; i++) {
    maxEnding = Math.max(A[i], maxEnding + A[i])
    maxSlice = Math.max(maxSlice, maxEnding)
  }
  return maxSlice
}

module.exports = solution
