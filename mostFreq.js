// "Given the set a a b b a a c c b b of unknown length, write an algorithm that figures out which occurs most frequently and with the most continuous repetition."


const TEST = ['a', 'a', 'b', 'b', 'a', 'a', 'c', 'c', 'b', 'b', 'c', 'c', 'd', 'd', 'd', 'd']


function solve(a) {
  let result = {}
  let mostFreq = {count: 0}
  let repeatCount = 0
  let repeatMax = 1

  for (let i = 0; i < a.length; i++) {
    result[a[i]] = 1 + (result[a[i]] || 0)
    if (a[i] == [a[i+1]]) {
      repeatCount++
      if (repeatCount > repeatMax) {
        repeatMax = repeatCount
      }
    }
    else {
      repeatCount = 1
    }
  }
  for (k in result) {
    if (result[k] > mostFreq.count) {
      mostFreq.count = result[k]
      mostFreq.letter = k
    }
    else if (result[k] === mostFreq.count) {
      mostFreq.letter += " " + k
    }
  }
  console.log(mostFreq, repeatMax)
}
