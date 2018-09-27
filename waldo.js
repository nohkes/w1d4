function findWaldo(arr, found) {
  //for (var i = 0; i < arr.length; i++) {
     // arr.forEach(findWaldo(arr)) {
     //     // execute callbac
     //    	console.log(found);
arr.forEach(function (element, index ) {

	if (element === "Waldo") 
	{
			found(index);

	}
     });
     
}
   
  
// function myFunction() {

// }

function actionWhenFound(index) {
  console.log("Found him! at ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
