'use strict'

function solution (X, A) {
  const fullRiver = X * (X + 1) / 2
  let river = 0
  const checkForDuplicate = []
  for (let fallingLeaf = 0; fallingLeaf < A.length; fallingLeaf++) {
    if (!checkForDuplicate[A[fallingLeaf]]) river += A[fallingLeaf]
    if (river === fullRiver) return fallingLeaf
    checkForDuplicate[A[fallingLeaf]] = true
  }
  return -1
}

module.exports = solution
