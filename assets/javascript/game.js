var opponentHP= 100;
var roundCount =0;
var pokemon = {"eevee":{ "attack" : 100 , "counter" : 100, "HP" : 100},
				"pikachu":{ "attack" : 100 , "counter" : 100, "HP" : 100},
				"charmander":{ "attack" : 100 , "counter" : 100, "HP" : 100},
				"bulbasaur":{ "attack" : 100 , "counter" : 100, "HP" : 100}
				};
var endGame ="false";
var characterChosen =false;
var opponentStaged = false;
var gameOver = false;
var userAttack;
var userHP;
var userCounterPower;
var enemyAttack;
var enemyHP;
var enemyCounterPower;
//sets up the character selection process
 

$(".gameCharacter").click(function(){
	 if (characterChosen === false && opponentStaged === false) {
	 	// button picks player and makes other three enimies 
		$(this).appendTo(".stagingArena");
		$(this).addClass("mainCharacter")
		$("#pokemonHolder").children().addClass("enemy");
		$(".sectionHeader").html("<h2> Available Opponents </h2>");
		$(".verses").html('<h2> V.S. </h2> <button class="btn btn-primary" id= "attack">Attack!</button><button class="btn btn-primary" id="restart"> Start all Over!</button>');
		//styling for main character
		$(".mainCharacter").css("background-color","white");
		//styling for enemies 
		$(".enemy").css("background-color","red");
		//grab poke-stats for battle and assign to user(attack,HP,counter)
		var pokeValue = $(this).attr("id");
		userAttack = pokemon[pokeValue].attack;
		userHP = pokemon[pokeValue].counter;
		userCounterPower = pokemon[pokeValue].HP;
		characterChosen = true;
		console.log(userAttack);
		console.log(userHP);
		console.log(userCounterPower);
		


		//picks out stagged enemy && makes sure player cant trigger onclick after both characters are set
	 } else if (characterChosen === true && opponentStaged === false) {
		console.log(this);
		$(this).appendTo(".enemyArena");
		$(this).addClass("mainEnemy");
		var pokeValue = $(this).attr("id");
		enemyAttack = pokemon[pokeValue].attack;
		enemyHP = pokemon[pokeValue].counter;
		enemyCounterPower = pokemon[pokeValue].HP;
		opponentStaged = true;
		console.log(enemyAttack);
		console.log(enemyHP);
		console.log(enemyCounterPower);	
	 }

 });




// $("#attack").click(function(){
// //makes your HP grow everyround  
// userAttack += userAttack

// });

//oponent attack 


//update HP with new HP
// userHP =- computerAttack;
// opponentHP =- userAttack;



// //pull in next oponinent and hide old opponent when one player has no more points left
// if(opponentHP === 0){
// 	roundCount++;
// 	$(".mainEnemy").hide();
// } 

// if(userHP === 0){
// 	endGame = "true";
// }



//when no more oponenets are left, end game

//if (roundCount === 3) {
//	return;
//} else{
	/* continue playing game;
}*/