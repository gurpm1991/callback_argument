

// The second argument/parameter is expected to be a function
/*

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
    	found.index = i;
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found Waldo at index " + actionWhenFound.index + "!");
}

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound));

*/




var arr = ["Alice", "Bob", "Waldo", "Winston"];

arr.forEach(function(xyz, abc){
	if (xyz === "Waldo") {
	actionWhenFound.index = abc

actionWhenFound();

}

})


function actionWhenFound(){
	console.log("Found him!");
}


