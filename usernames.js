let test = ["alex", "bob", "alex", "alex", "matt", "dave", "alex", "bob"]

function solve(test) {
  let count = {}
  let answer = []

  for (let i = 0; i < test.length; i++) {
    count[test[i]] =  1 + (count[test[i]] || 0)
  }
  // count = {"alex": 4, "bob": 2, "matt": 1, "dave": 1}

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
