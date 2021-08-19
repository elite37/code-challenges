const chess = (n=8) => {
  let board = ''
  let value = false
  for (let i = 1; i < Math.pow(n, 2)+1; i++) {
    if ((i+value) % 2 === 0) {
     board = board.concat('* ')
    } else {
      board = board.concat('# ')
    }
    if (i !== 0 && i % n === 0) {
      board = board.concat('\n')
      value = !value
    }
  }
  console.log(board)
}