'use strict'

function solution (A) {
  let rightSum = A.reduce((acc, elem) => acc + elem)
  let leftSum = 0
  let currentDiff = rightSum
  let lastDiff = currentDiff

  for (let i = 0; i < A.length - 1; i++) {
    leftSum = leftSum + A[i]
    rightSum = rightSum - A[i]
    currentDiff = Math.abs(rightSum - leftSum)
    if (currentDiff < lastDiff || i === 0) lastDiff = currentDiff
  }

  return lastDiff
}

module.exports = solution
