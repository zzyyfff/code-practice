'use strict'

function solution (A) {
  const leader = findLeader(A)
  let total = 0
  if (leader !== null) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === leader) total++
    }
  } else {
    return 0
  }

  let equiLeaders = 0
  let ldrCount = 0

  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) ldrCount++

    const leadersInRightPart = (total - ldrCount)

    if (ldrCount > (i + 1) / 2 && leadersInRightPart > (A.length - i - 1) / 2) {
      equiLeaders++
    }
  }
  return equiLeaders
}

function findLeader (A) {
  let stackSize = 0
  let candidate = null
  let count = 0

  for (let i = 0; i < A.length; i++) {
    if (stackSize === 0) {
      stackSize++
      candidate = A[i]
    } else {
      if (candidate !== A[i]) {
        stackSize--
      } else {
        stackSize++
      }
    }
  }
  if (stackSize === 0) return -1
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) count++
  }
  return count > Math.floor(A.length / 2) ? candidate : null
}

module.exports = solution
