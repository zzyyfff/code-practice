'use strict'

function solution (S) {
  const stack = []
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case '(':
        stack.push(S[i])
        break
      case ')':
        if (!stack.length) return 0
        stack.pop()
        break
    }
  }
  return stack.length === 0 ? 1 : 0
}

module.exports = solution
