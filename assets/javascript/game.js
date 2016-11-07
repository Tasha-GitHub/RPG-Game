var opponentHP= 100;
var roundCount =0;
var pokemon = {"eevee":{ "attack" : 40 , "counter" : 15, "HP" : 180},
				"pikachu":{ "attack" : 15 , "counter" : 10, "HP" : 120},
				"charmander":{ "attack" : 30 , "counter" : 5, "HP" : 150},
				"bulbasaur":{ "attack" : 20 , "counter" : 20, "HP" : 100}
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
var mainPokemon;
var characterProgress;
var enemyProgress;

$(document).ready(function() {
	//sets up the character selection process
	$(".gameCharacter").click(function(){
		 if (characterChosen === false && opponentStaged === false) {
		 	//finds the progress bar of the chosen element 
		 	characterProgress = $(this).children().children()[0];
			$(this).appendTo(".stagingArena");
			//adds maincharacter class to chosen character for later manipulation
			$(this).addClass("mainCharacter");
			// button picks player and makes other three enimies 
			$("#pokemonHolder").children().addClass("enemy");
			$(".sectionHeader").html("<h2> Available Opponents </h2>");
			//styling for main character
			$(".mainCharacter").css("background-color","white");
			//styling for enemies 
			$(".enemy").css("background-color","red");
			//grab poke-stats for battle and assign to user(attack,HP,counter)
			var pokeValue = $(this).attr("id");
			mainPokemon = $(this).attr("id");
			userBaseAttack = pokemon[pokeValue].attack;
			userAttack = pokemon[pokeValue].attack;
			userHP = pokemon[pokeValue].HP;
			userCounterPower = pokemon[pokeValue].counter;
			characterChosen = true;

			console.log("userattack is " + userAttack + "userHP is " + userHP)


			//picks out stagged enemy && makes sure player cant trigger onclick after both characters are set
		 } else if (characterChosen === true && opponentStaged === false) {
			// stops user from clicking on maincharacter and setting to enemy
			if ($(this).attr("id") === mainPokemon){
				return;
			} else {
				$(".enemyArena").html(" ");
				$(this).appendTo(".enemyArena");
				$(this).addClass("mainEnemy");
				enemyProgress = $(this).children().children()[0];
				var pokeValue = $(this).attr("id");
				$(".verses").html('<div> <h2> V.S. </h2> </div><div><button class="btn btn-primary" id= "attack">Attack!</button></div>');
				enemyAttack = pokemon[pokeValue].attack;
				enemyHP = pokemon[pokeValue].HP;
				enemyCounterPower = pokemon[pokeValue].counter;
				opponentStaged = true;
				$(".update").html("<div>" + "Your Attack Power is " + userAttack+"</div>" + "<div>" + "Your HP is " + userHP+"</div>" + "<div>" + "Your Enemies HP is " + enemyHP +"</div>" );
				// hides oppnents section once last pokemon is up for battle
				if (roundCount === 2) {
					$(".oponents").hide();



					console.log("enemyAttack is " + enemyAttack + "enemyHP is " + enemyHP)
				}
			}	
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
			console.log("enemyAttack is " + enemyAttack + "enemyHP is " + enemyHP)
			console.log("userattack is " + userAttack + "userHP is " + userHP)
			console.log("_----------user  attack function ran---------")
			
			//enemy new stats 
			enemyHP -= (userAttack - enemyCounterPower);
			console.log("_----------enemy hp function ran---------")
			console.log("enemy new hp" + enemyHP)
			console.log("enemyAttack is " + enemyAttack + "enemyHP is " + enemyHP)
			console.log("userattack is " + userAttack + "userHP is " + userHP)

			//main characters health depreciation upon attack
			userHP -=(enemyAttack - userCounterPower);
			console.log("your new hp" + userHP);
			console.log("enemyAttack is " + enemyAttack + "enemyHP is " + enemyHP)
			console.log("userattack is " + userAttack + "userHP is " + userHP)
			console.log("_----------user HP function ran---------")



			//updates update section with new stats
			$(".update").html("<div>" + "Your Attack Power is " + userAttack+"</div>" + "<div>" + "Your HP is " + userHP+"</div>" + "<div>" + "Your Enemies HP is " + enemyHP +"</div>" );

			//updates progress bar with main characters new health 
			 $(characterProgress).html(userHP);
			 $(characterProgress).attr("aria-valuenow", userHP);
			 $(characterProgress).css("width", userHP);
			 $(enemyProgress).html(enemyHP);
			 $(enemyProgress).attr("aria-valuenow", enemyHP);
			 $(enemyProgress).css("width", enemyHP);

			//when enemy faints
			if(enemyHP <= 0){
				console.log("enemy fainted");
				opponentStaged = false;
				$(".mainEnemy").remove();
				$(".enemyArena").html("Please Pick A New Opponent!");
				roundCount++;
			}


			// when main character faints 
			if (userHP <=0){
				console.log("you fainted");
				$("body").html('<div class="endingDiv"> <p> Game Over! </p> </div>  <div> <button class="btn btn-primary" id="restart"> Start all Over!</button> </div>');
				$("body").css({"color": "white", "background-color": "black", "background-image" : "url(assets/images/pika-faint.jpg)",
				"background-size" : "300px 300px" , "background-repeat": "no-repeat", "background-attachment": "fixed",
	   			 "background-position": "50% 50%"});
			}


			// if all enemies are defeated
			if(roundCount === 3) {
				console.log("you won, you earned a pokebadge!");
				$("body").html('<div class="endingDiv"> <p> You Won! </p> </div>  <div> <button class="btn btn-primary" id="restart"> Start all Over!</button> </div>');
				$("body").css({"color": "white", "background-color": "black", "background-image" : "url(assets/images/poke-badge.png)",
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
});