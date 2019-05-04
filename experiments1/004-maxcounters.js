'use strict'

function solution (N, A) {
  const counters = Array(N).fill(0)
  let max = 0
  let lastMaxing = 0
  for (let K = 0; K < A.length; K++) {
    if (A[K] > N) {
      lastMaxing = max
    } else {
      if (counters[A[K] - 1] < lastMaxing && counters[A[K]] <= N) counters[A[K] - 1] = lastMaxing
      if (++counters[A[K] - 1] > max) max = counters[A[K] - 1]
    }
    console.log(`K: ${K}, counters: ${counters}`)
  }
  for (const i in counters) {
    if (counters[i] < lastMaxing) counters[i] = lastMaxing
  }
  return counters
}

module.exports = solution
