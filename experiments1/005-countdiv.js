'use strict'

function solution(A, B, K) {
    const firstDiv = A % K === 0 ? 1 : 0
    return Math.floor(B / K) - Math.floor(A / K) + firstDiv
}

module.exports = solution
