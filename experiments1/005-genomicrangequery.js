'use strict'

// A1 C2, G3 and T4
function solution (S, P, Q) {
  let subStr = ''
  const lowestArray = []

  for (let i = 0; i < P.length; i++) {
    subStr = S.slice(P[i], Q[i] + 1)

    if (subStr.indexOf('A') !== -1) {
      lowestArray.push(1)
    } else if (subStr.indexOf('C') !== -1) {
      lowestArray.push(2)
    } else if (subStr.indexOf('G') !== -1) {
      lowestArray.push(3)
    } else {
      lowestArray.push(4)
    }
  }

  return lowestArray
}

module.exports = solution
