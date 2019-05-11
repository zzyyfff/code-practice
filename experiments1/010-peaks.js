'use strict'

// Found on the internet; THIS IS NOT MY SOLUTION
// This problem had me stumped as to how to get to
// 100% performance. I'm still working out how
// this one works.

function isPeak (A, i) {
  if (A.length === 0 || A.length === 1) {
    return 0
  }
  if (i === 0 || i === A.length - 1) {
    return 0
  } else {
    if ((A[i] > A[i - 1]) && (A[i] > A[i + 1])) {
      return 1
    } else {
      return 0
    }
  }
}

function solution (A) {
  const peak = []
  for (let i = 0; i < A.length; ++i) {
    peak.push(isPeak(A, i))
  }

  const countPeak = [0]
  for (let i = 0; i < A.length; ++i) {
    countPeak.push(countPeak[i] + peak[i])
  }

  if (countPeak[A.length] === 0) { return 0 }
  if (countPeak[A.length] === 1) { return 1 }

  let verifying
  for (let div = 2; div < A.length + 1; ++div) {
    if (A.length % div === 0) {
      verifying = 0
      for (let i = 0; i < A.length / div; ++i) {
        if ((countPeak[(i + 1) * div] - countPeak[i * div]) > 0) {
          ++verifying
        }
      }
      if (verifying === A.length / div) {
        return A.length / div
      }
    }
  }
}

module.exports = solution
