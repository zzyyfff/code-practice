function processData (input) {
  input = input.split('\n')
  const N = +input[0]

  const entries = []

  for (let k = 0; k < N; k++) {
    let line = input[k + 1]
    line = line.split(' ')
    entries[line[0]] = line[1]
  }

  for (let k = N + 1; k < input.length; k++) {
    const num = (entries[input[k]])
    if (num !== undefined) {
      console.log(input[k] + '=' + num)
    } else {
      console.log('Not found')
    }
  }
}

module.exports = processData
