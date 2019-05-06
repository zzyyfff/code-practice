'use strict'

function solution (H) {
  const stack = []
  let blocks = 0
  for (let i = 0; i < H.length; i++) {
    while (stack.length && H[i] < stack[stack.length - 1]) {
      stack.pop()
      blocks++
    }
    if (!stack.length || H[i] > stack[stack.length - 1]) {
      stack.push(H[i])
    }
  }
  return blocks + stack.length
}

module.exports = solution
