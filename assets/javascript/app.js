var start;
var gameHTML;
var counter = 30;
var questionArray = [
	"What is the name of Frodo's Sword?", 
	"What is the name of the Wizard that gives the hobbits Guidance?", 
	"What is the name of the spider that Golum pairs up with?", 
	"What is the name of the Swort Gandalf bestows to Argorn?", 
	"What is the name of the Secret Fire that Gandalf is the Keeper of?", 
	"What weapon does Gimli wield?", "Where is Gimli's Family From?", 
	"Where is Sauron's Tower Located?"];
var answerArray = [
	["Sting", "Viper", "Fang", "Venom"], 
	["Saurmon","Gandalf","Elrond","Voldermort"], 
	["Arwyn", "Eowyn", "Shelob", "Sauron"], 
	["Melkor","Flame of Anor","Narsil","Striker"], 
	["Burning Axe", "Ash Fire", "Warriors Blast", "Flame of Anor"], 
	["Battle Axe","Long Bow","Glowing Sword","Light Saber"], 
	["Valinor", "Moria", "Gondor", "Rivendell"], 
	["Minas Tirith","Helms Deep","Moria","Mordor"]];
var correctAnswers = [
	"A. Sting", 
	"B. Gandalf", 
	"C. Shelob", 
	"C. Narsil", 
	"D. Flame of Anor", 
	"A. Battle Axe", 
	"B. Moria", 
	"D. Mordor"];
var questionCounter = 0;
var selecterAnswer;
var Clock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


$(document).ready(function() {

function welcomeScreen() {
	start = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>"
	$(".game").html(start);
}	

welcomeScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	generateHTML();


	timerWrapper();

});

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

	clearInterval(Clock);
	generateWin();
	}
	else {
	clearInterval(Clock);
	generateLoss();
	}
	}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
	}); 

});

function generateLossTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
	$(".game").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
	$(".game").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>";
	$(".game").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".game").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	Clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
		clearInterval(Clock);
		generateLossTimeOut();
		}
		if (counter > 0) {
		counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Results!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".game").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

















