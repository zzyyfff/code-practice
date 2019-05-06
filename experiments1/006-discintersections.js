'use strict'

function solution (A) {
  let intersections = 0
  const leftEdges = []
  const rightEdges = []

  for (let i = 0; i < A.length; i++) {
    leftEdges[i] = i - A[i]
    rightEdges[i] = i + A[i]
  }

  leftEdges.sort((a, b) => a - b)
  rightEdges.sort((a, b) => a - b)

  let i = 0
  let j = 0
  for (i = 0; i < A.length; i++) {
    for (j; j < A.length && leftEdges[j] <= rightEdges[i]; j++) {
      intersections += j - i
    }
    if (intersections > 10000000) return -1
  }

  return intersections
}

module.exports = solution
