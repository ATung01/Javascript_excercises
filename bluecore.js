// Question 1

function stringCheck(inputString, correctString) {
  let numErrors = 0;
  let inputIdx = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (inputIdx >= correctString.length) {
      inputIdx = 0;
    }
    if(correctString[inputIdx] !== inputString[i]) {
      numErrors++;
    }
    inputIdx++;
  }
  return numErrors;
}

// Question 2

function letterCounter(inputString) {
  let counts = {};

  for (let i = 0; i < inputString.length; i++) {
    counts[inputString[i]] = 1 + (counts[inputString[i]] || 0 );
  }
  // adding everything into an object with each letter stored as a key
  return counts;
}

function palindromeCheck(inputString) {
  let numOdd = 0;
  let numLetters = letterCounter(inputString);

  for( x in numLetters ) {
    numOdd += (numLetters[x] % 2);
  }
  if (numOdd === 0 || numOdd === 1) {
    return true;
  }
  else {
    return false;
  }
  // I'm assuming the only way a palindrome works as an anagram is that there can only be a max of 1 odd number of characters
}



// Question 3


function jennyTree(desiredHeight) {
  let currentHeight = 1;
  let numYears = 0;
  let wontShrink = false;
  while(currentHeight < desiredHeight && wontShrink === false) {
    console.log(currentHeight)
    currentHeight = growRules(currentHeight);
    if (currentHeight >= desiredHeight && jennyPalindrome(Math.floor(currentHeight)) === false ) {
      wontShrink = true;
    }
    numYears++;
  }
  return numYears;
}

function growRules(currentHeight){
  if (currentHeight >= 10 && jennyPalindrome(Math.floor(currentHeight))) {
    currentHeight *= 0.66;
  }
  else if (Math.floor(currentHeight) % 2 === 0) {
    currentHeight *= 1.23;
  }
  else {
    currentHeight += Math.sqrt(currentHeight);
  }
  return currentHeight;
}

function jennyPalindrome(num) {
  let numString = num.toString();
    for (let i = 0; i < numString.length/2; i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
