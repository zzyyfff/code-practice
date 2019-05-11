'use strict'

function solution (N) {
  let i = 1
  let lastFactor = 1
  while (i * i < N) {
    if (N % i === 0) {
      lastFactor = i
    }
    i++
  }
  if (i * i === N) lastFactor = i
  return (lastFactor + (N / lastFactor)) * 2
}

module.exports = solution
