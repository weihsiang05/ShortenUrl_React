function link(shorter) {
  const randomletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const fixLink = "http://localhost:3000/"
  let createRandomletter = ""
  let newLink = ""

  for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * randomletter.length)
    createRandomletter += randomletter[random]
  }
  newLink = fixLink + createRandomletter

  return newLink
}

module.exports = { link }