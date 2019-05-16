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
function readLine () {
  return input_stdin_array[input_currentline++]
}
function Node (data) {
  this.data = data
  this.next = null
}
function Solution () {
  this.insert = function (head, data) {
    // complete this method
    if (head === null) {
      head = new Node(data)
      return head
    }
    let current = head
    while (current.next !== null) {
      current = current.next
    }
    current.next = new Node(data)
    return head
  }

  this.display = function (head) {
    let start = head
    while (start) {
      process.stdout.write(start.data + ' ')
      start = start.next
    }
  }
}
function main () {
  const T = parseInt(readLine())
  let head = null
  const mylist = new Solution()
  for (let i = 0; i < T; i++) {
    const data = parseInt(readLine())
    head = mylist.insert(head, data)
  }
  mylist.display(head)
}
