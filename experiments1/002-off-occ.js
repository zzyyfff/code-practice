'use strict'

function solution (A) {
  return A.reduce((acc, elem) => acc ^ elem)
}

module.exports = solution
