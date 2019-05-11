'use strict'

function solution (A) {
  const k1 = A.map(i => 0)
  const k2 = A.map(i => 0)
  let maxSlice = -Infinity
  for (let i = 1; i < A.length - 1; i++) {
    k1[i] = Math.max(k1[i - 1] + A[i], 0)
  }
  for (let i = A.length - 2; i > 0; i--) {
    k2[i] = Math.max(k2[i + 1] + A[i], 0)
  }
  for (let i = 1; i < A.length - 1; i++) {
    maxSlice = Math.max(maxSlice, k1[i - 1] + k2[i + 1])
  }
  return maxSlice
}

module.exports = solution
