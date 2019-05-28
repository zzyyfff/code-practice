function processData (input) {
  const dates = input.split('\n')
  const actual = dates[0].split(' ').map(Number)
  const expected = dates[1].split(' ').map(Number)
  const actDate = new Date(actual[2], actual[1], actual[0])
  const expDate = new Date(expected[2], expected[1], expected[0])
  let fine = 0

  if (actDate <= expDate) {
    fine = 0
  } else if (actual[1] === expected[1] && actual[2] === expected[2]) {
    fine = 15 * (actual[0] - expected[0])
  } else if (actual[2] === expected[2]) {
    fine = 500 * (actual[1] - expected[1])
  } else {
    fine = 10000
  }

  console.log(fine)
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
  _input += input
})

process.stdin.on('end', function () {
  processData(_input)
})
