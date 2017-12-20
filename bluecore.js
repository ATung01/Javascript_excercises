// Question 1

function stringCheck(inputString, correctString) {
  var numErrors = 0;
  var inputIdx = 0;

  for (var i = 0; i < inputString.length; i++) {
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
  var counts = {};

  for (var i = 0; i < inputString.length; i++) {
    counts[inputString[i]] = 1 + (counts[inputString[i]] || 0 );
  }
  return counts;
}

function palindromeCheck(inputString) {
  var numOdd = 0;
  var numLetters = letterCounter(inputString);

  for( x in numLetters ) {
    numOdd += (numLetters[x] % 2);
  }

  if (numOdd === 0) {
    return true;
  }
  else if (numOdd === 1 && inputString.length % 2 === 1) {
    return true;
  }
  else {
    return false;
  }

}



// Question 3


function jennyTree(desiredHeight) {
  var currentHeight = 1;
  var numYears = 0;
  var wontShrink = false;
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
  var numString = num.toString();
    for (var i = 0; i < numString.length/2; i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
