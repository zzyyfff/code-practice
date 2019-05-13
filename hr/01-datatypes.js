process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''
let input_stdin_array = ''
let input_currentline = 0

process.stdin.on('data', function (data) {
  input_stdin += data
})

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n')
  main()
})

// Reads complete line from STDIN
function readLine () {
  return input_stdin_array[input_currentline++]
}

function main () {
  const i = 4
  const d = 4.0
  const s = 'HackerRank '
  // Declare second integer, double, and String variables.
  const i2 = +(readLine())
  const d2 = +(readLine())
  const s2 = readLine()
  // Read and save an integer, double, and String to your variables.

  // Print the sum of both integer variables on a new line.
  console.log(i + i2)
  // Print the sum of the double variables on a new line.
  console.log((d + d2).toFixed(1))
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + s2)
}
