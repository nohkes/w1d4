var foods = ["pasta", "burger", "dogburger", "mushu", "ramens"];

// map(foods, function(word) {
//   return word.length;
// });

// map(foods, function(word) {
//   return word.toUpperCase();
// });

// map(foods, function(word) {
//   return word.split('').reverse().join('');
// });

function fakeMap (foods, map)
{
	for (var i = 0; i < foods.length; i++) {
		foods.splice(i,1,map(foods[i]));
		}
	return
}

function foodLength(food)
{
	return food.length;

}
function foodUpper(food)

{
	return food.toUpperCase();

}
function illegal(food)
{
	if (food === "dogburger")

	{
	return "Thats illegal";
	}
	else
	{
	return food;
	}
}





fakeMap(foods,foodUpper);

console.log(foods)