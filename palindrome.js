
// let word = "racecar"


function slowerPalindrome(word) {
  let letters = []
  let rword = ""

  for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
  }

  for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  if (rword === word) {
    console.log(word + " is a palindrome.")
  }
  else {
    console.log(word + " is not a palindrome.")
  }
}

function fasterPalindrome(word) {

  var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
  word = word.toLowerCase().replace(re, '');


  for (var i = 0; i < word.length/2; i++) {
    if (str[i] !== str[word.length - 1 - i]) {
      console.log(word + " is not a palindrome.")
      return false;
    }

  }
  console.log(word + " is a palindrome.")
  return true;
  }

}
