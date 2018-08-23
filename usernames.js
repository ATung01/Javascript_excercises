let test = ["alex", "bob", "alex", "alex", "matt", "dave", "alex"]

function solve(test) {
  let count = {}
  let answer = []

  for (let i = 0; i < test.length; i++) {
    count[test[i]] =  1 + (count[test[i]] || 0)
  }

  for (let j = (test.length-1); j >= 0; j--) {
    if (count[test[j]] > 1) {
      let combinedName = test[j] + (count[test[j]] - 1)
      count[test[j]] = count[test[j]] - 1
      answer.unshift(combinedName)
    }
    else {
      answer.unshift(test[j])
    }
  }

  console.log(answer)
}
