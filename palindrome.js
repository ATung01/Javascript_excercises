let letters = []

let word = "racecar"

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

function fasterPalindrome(word) {

  for (var i = 0; i < word.length/2; i++) {
    if (str[i] !== str[word.length - 1 - i]) {
      console.log(word + " is not a palindrome.")
      return false;
    }

  }
  console.log(word + " is a palindrome.")
  return true; // Both parts are strictly equal, it returns true => The string is a palindrome
  }

}
