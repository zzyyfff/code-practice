'use strict'

function solution (A) {
  const dict = {}
  let max = 1

  // use the integers as dictionary keys
  // also keep track of the max integer found
  for (let i = 0; i < A.length; i++) {
    dict[A[i]] = true
    if (A[i] > max) max = A[i]
  }

  for (let i = 1; i <= max + 1; i++) {
    // look for first (smallest) missing key
    if (!dict[i]) return i
  }
  return max + 1
}

module.exports = solution
