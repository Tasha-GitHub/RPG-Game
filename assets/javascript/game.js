var userHP =100;
var opponentHP= 100;
var roundCount =0;
var pokemon = ["eevee", "pikachu", "squirtle", "bulbasaur"];
var endGame ="false";
var chosenCharacter ="false";


// user clicks on a button and chooses player ->
$(".gameCharacter").click(function(){
	console.log(this);
	$(this).appendTo(".stagingArena");
	$("#pokemonHolder").children().addClass("enemy");
});




//picks enemy
$(".enemy").click(function(){
	console.log(this);
	$(this).appendTo(".enemyArea");
});




// button picks player and makes other three enimies 


//random number generator for your attack 
var userAttack = Math.floor(Math.random()*30)+1;
console.log(userAttack)


//random number generator for his attack
var computerAttack = Math.floor(Math.random()*30)+1;
console.log(computerAttack);

//update HP with new HP
userHP =- computerAttack;
opponentHP =- userAttack;



//pull in next oponinent and hide old opponent when one player has no more points left
if(opponentHP === 0){
	roundCount++;
} 

if(userHP === 0){
	endGame = "true";
}



//when no more oponenets are left, end game

//if (roundCount === 3) {
//	return;
//} else{
	/* continue playing game;
}*/