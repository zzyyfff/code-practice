'use strict'

function solution (A) {
  const sumShouldBe = ((A.length) * (A.length + 1)) / 2
  const checkArray = []
  let acc = 0
  for (const i in A) {
    if (checkArray[A[i]]) return 0
    checkArray[A[i]] = true
    if (A[i] <= 0 || A[i] > A.length) return 0
    acc = acc + A[i]
  }
  if (acc === sumShouldBe) return 1
  return 0
}

module.exports = solution
