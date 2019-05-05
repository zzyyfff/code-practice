'use strict'

function solution (A) {
  let smallP = 0
  let smallAvg = Infinity
  for (let i = 0; i < A.length - 1; i++) {
    const twoSlice = (A[i] + A[i + 1]) / 2
    const threeSlice = i !== A.length - 2 ? (A[i] + A[i + 1] + A[i + 2]) / 3 : Infinity
    const thisSlice = twoSlice < threeSlice ? twoSlice : threeSlice
    if (thisSlice < smallAvg) {
      smallAvg = thisSlice
      smallP = i
    }
  }
  return smallP
}

module.exports = solution
