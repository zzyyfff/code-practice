'use strict'

function solution (A) {
  return A.reduce((acc, elem) => acc - elem, ((A.length + 1) * (A.length + 2)) / 2)
}

module.exports = solution
