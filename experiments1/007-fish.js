'use strict'

function solution (A, B) {
  const activeDown = []
  const survivedUp = []

  for (let i = 0; i < A.length; i++) {
    if (B[i]) {
      activeDown.push(A[i])
    } else {
      while (activeDown.length !== 0) {
        const fishDownContender = activeDown.pop()

        if (fishDownContender > A[i]) {
          activeDown.push(fishDownContender)
          break
        }
      }
      if (!activeDown.length) {
        survivedUp.push(A[i])
      }
    }
  }

  return survivedUp.length + activeDown.length
}

module.exports = solution
