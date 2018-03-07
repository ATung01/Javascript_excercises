// Given a string and K, find the top K most common words in the string

function findTop(string, k) {
  string = string.toLowerCase().split(" ")

  let wordStore = {}

  for (let i = 0; i < string.length; i++) {
    wordStore[string[i]] = 1 + (wordStore[string[i]] || 0)
  }
  console.log(wordStore)

}

let exampleString = "This is an example this sort of question really needs and this and this and this too"


findTop(exampleString, 3)
