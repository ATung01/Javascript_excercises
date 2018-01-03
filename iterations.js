/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

Given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

*/

function solution(N) {
  let numZeroes = 0
  let maxGap = 0
  let currentSequence = "closed"
  let binaryArr = makeBinaryString(N).split("")

  for (let i = 0; i < binaryArr.length; i++) {
    if (binaryArr[i] === "1"  && currentSequence === "closed" && binaryArr[i+1] === "0") {
      currentSequence = "open"
    }
    else if (binaryArr[i] === "0") {
      currentSequence = "open"
      numZeroes++
    }
    else if (binaryArr[i] === "1" && currentSequence === "open") {
      if (maxGap < numZeroes) {
        maxGap = numZeroes
      }
      numZeroes = 0
      currentSequence = "closed"
    }
  }
  return maxGap;

}

function makeBinaryString(num) {
  return num.toString(2)
}
