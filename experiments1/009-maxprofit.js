'use strict'

function solution (A) {
  const change = [0]
  for (let i = 0; i < A.length - 1; i++) {
    change[i + 1] = A[i + 1] - A[i]
  }

  let maxEnding = 0
  let maxSlice = 0
  for (let i = 0; i < change.length; i++) {
    maxEnding = Math.max(0, maxEnding + change[i])
    maxSlice = Math.max(maxSlice, maxEnding)
  }
  return maxSlice
}

module.exports = solution
