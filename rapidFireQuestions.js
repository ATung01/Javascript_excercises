// doing questions from https://www.sitepoint.com/5-javascript-interview-exercises/

function question1() {
  var nodes = document.getElementsByTagName('button');
  for (var i = 0; i < nodes.length; i++) {
     nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
     });
  }
}
// this shows "You clicked element 5" twice


function handlerWrapper(i) {
   return function() {
      console.log('You clicked element #' + i);
   }
}
function question2() {
  var nodes = document.getElementsByTagName('button');
  for (var i = 0; i < nodes.length; i++) {
     nodes[i].addEventListener('click', handlerWrapper(i));
  }
}

function question3() {
  console.log(typeof null);
  console.log(typeof {});
  console.log(typeof []);
  console.log(typeof undefined);
}

function question4() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

function question5(number) {
   if (typeof number !== 'number' || !Number.isInteger(number)) {
      return false;
   }
   if (number < 2) {
      return false;
   }
   if (number === 2) {
      return true;
   } else if (number % 2 === 0) {
      return false;
   }
   var squareRoot = Math.sqrt(number);
   for(var i = 3; i <= squareRoot; i += 2) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}
