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