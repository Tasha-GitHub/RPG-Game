var opponentHP= 100;
var roundCount =0;
var pokemon = {"eevee":{ "attack" : 100 , "counter" : 5, "HP" : 500},
				"pikachu":{ "attack" : 10 , "counter" : 5, "HP" : 100},
				"charmander":{ "attack" : 10 , "counter" : 5, "HP" : 100},
				"bulbasaur":{ "attack" : 10 , "counter" : 5, "HP" : 100}
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
var userBaseAttack;
//sets up the character selection process
 

$(".gameCharacter").click(function(){
	 if (characterChosen === false && opponentStaged === false) {
	 	// button picks player and makes other three enimies 
		$(this).appendTo(".stagingArena");
		$(this).addClass("mainCharacter")
		$("#pokemonHolder").children().addClass("enemy");
		$(".sectionHeader").html("<h2> Available Opponents </h2>");
		
		//styling for main character
		$(".mainCharacter").css("background-color","white");
		//styling for enemies 
		$(".enemy").css("background-color","red");
		//grab poke-stats for battle and assign to user(attack,HP,counter)
		var pokeValue = $(this).attr("id");
		userBaseAttack = pokemon[pokeValue].attack;
		userAttack = pokemon[pokeValue].attack;
		userHP = pokemon[pokeValue].HP;
		userCounterPower = pokemon[pokeValue].counter;
		characterChosen = true;
		// console.log(userAttack);
		// console.log(userHP);
		// console.log(userCounterPower);
		


		//picks out stagged enemy && makes sure player cant trigger onclick after both characters are set
	 } else if (characterChosen === true && opponentStaged === false) {
		$(".enemyArena").html(" ");
		$(this).appendTo(".enemyArena");
		$(this).addClass("mainEnemy");
		var pokeValue = $(this).attr("id");
		$(".verses").html('<div> <h2> V.S. </h2> </div><div><button class="btn btn-primary" id= "attack">Attack!</button></div>');
		enemyAttack = pokemon[pokeValue].attack;
		enemyHP = pokemon[pokeValue].HP;
		enemyCounterPower = pokemon[pokeValue].counter;
		opponentStaged = true;
		$(".update").html("<div>" + "Your Attack Power is " + userAttack+"</div>" + "<div>" + "Your HP is " + userHP+"</div>" + "<div>" + "Your Enemies HP is " + enemyHP +"</div>" );
		console.log(enemyAttack);
		console.log(enemyHP);
		console.log(enemyCounterPower);	
	 }

 });



//when the user hits the attack button
$(".verses").on("click", "#attack",function(){	
	//if statement stops user from clicking button with no opponent
	if (opponentStaged === false){
		return;
	}

	else {

		
		//makes your attack grow everyround  
		userAttack += userBaseAttack
		console.log("user attack power" + userAttack);

		//enemy new stats 
		enemyHP -= (userAttack - enemyCounterPower);
		console.log("enemy new hp" + enemyHP)


		//main characters health depreciation upon attack
		userHP -=(enemyAttack - userCounterPower);
		console.log("your new hp" + userHP);

		//updates update section with new stats
		$(".update").html("<div>" + "Your Attack Power is " + userAttack+"</div>" + "<div>" + "Your HP is " + userHP+"</div>" + "<div>" + "Your Enemies HP is " + enemyHP +"</div>" );

		// updates progress bar with new health 
		$(".update").html();

		//when enemy faints
		if(enemyHP <= 0){
			console.log("enemy fainted");
			opponentStaged = false;
			$(".mainEnemy").remove();
			$(".enemyArena").html("Please Pick A New Opponent!");
		}
		// when main character faints 
		if (userHP <=0){
			console.log("you fainted");
			$("body").html('<div> <p> Game Over! </p> </div>  <div> <button class="btn btn-primary" id="restart"> Start all Over!</button> </div>');
			$("body").css({"color": "white", "background-color": "black", "background-image" : "url(assets/images/pika-faint.jpg)",
			"background-size" : "300px 300px" , "background-repeat": "no-repeat", "background-attachment": "fixed",
   			 "background-position": "50% 50%"});
		}
	}

});


// when they click on the start over button
$("body").on("click", "#restart",function(){	
	console.log("restart butotn clicked");
	location.reload();

  

});



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