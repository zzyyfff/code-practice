'use strict'

function solution (A, K) {
  const rotate = K % A.length
  if (rotate === 0) return A
  const cut = A.length - rotate
  return [...A.slice(cut), ...A.slice(0, cut)]
}

module.exports = solution
