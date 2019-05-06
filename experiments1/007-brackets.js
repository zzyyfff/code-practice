'use strict'

function solution (S) {
  const stack = []
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(S[i])
        break
      case ')':
        if (stack.length === 0 || stack[stack.length - 1] !== '(') return 0
        stack.pop()
        break
      case '}':
        if (stack.length === 0 || stack[stack.length - 1] !== '{') return 0
        stack.pop()
        break
      case ']':
        if (stack.length === 0 || stack[stack.length - 1] !== '[') return 0
        stack.pop()
        break
    }
  }
  if (stack.length === 0) return 1
  return 0
}

module.exports = solution
