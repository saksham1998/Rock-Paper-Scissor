var userScore = 0;
var compScore = 0;
var messageEl = document.getElementById('message');
var userEl = document.getElementById('user-score');
var compEl = document.getElementById('comp-score');
var paperEl = document.getElementById('paper');
var rockEl = document.getElementById('rock');
var scissorsEl = document.getElementById('scissors');  

const messageGenerator = () =>{
     		var arr = ['Paper Covers Rock','Scissor Cuts Paper','Rock Smashes Scissors'];
     		var num = Math.floor(Math.random()*3);
     		messageEl.innerHTML = `${arr[num]}`
 }

const game = (value) => {
	var arr = ['paper','scissor','rock'];
	var num = Math.floor(Math.random()*3);
	if(value=='scissor'){
		if(arr[num]=='scissor'){
			scissorsEl.classList.add('drawStyles');
			setTimeout(() => scissorsEl.classList.remove('drawStyles'), 400);
			messageEl.innerHTML = `It was a draw! You both choose ${value}`;
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;
		}
		else if(arr[num]=='paper'){
			userScore++;
			messageEl.innerHTML = `Scissors<sub>(user)</sub> beats paper<sub>(comp)</sub>. You win!`;
			scissorsEl.classList.add('winningStyles');
			setTimeout(() => scissorsEl.classList.remove('winningStyles'), 400);
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;		
		}
		else{
			compScore++;
			scissorsEl.classList.add('losingStyles');
			setTimeout(() => scissorsEl.classList.remove('losingStyles'), 400);
			messageEl.innerHTML = `rock<sub>(comp)</sub> smashes scissor<sub>(user)</sub>. You lose!`;
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;			
		}	 
	}	
	
	if(value=='rock'){
		if(arr[num]=='rock'){
			rockEl.classList.add('drawStyles');
			setTimeout(() => rockEl.classList.remove('drawStyles'), 400);
			messageEl.innerHTML = `It was a draw! You both choose ${value}`;
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;				
		}
		else if(arr[num]=='scissor'){
			rockEl.classList.add('winningStyles');
			setTimeout(() => rockEl.classList.remove('winningStyles'), 400);
			userScore++;
			messageEl.innerHTML = `rock<sub>(user)</sub> smashes scissor<sub>(comp)</sub>. You win!`;
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;				
		}
		else{
			rockEl.classList.add('losingStyles');
			setTimeout(() => rockEl.classList.remove('losingStyles'), 400);
			compScore++;
			messageEl.innerHTML = `paper<sub>(comp)</sub> covers rock<sub>(user)</sub>. You lose!`;
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;			
		}  
	}
	if(value=='paper'){
		if(arr[num]=='paper'){
			paperEl.classList.add('drawStyles');
			setTimeout(() => paperEl.classList.remove('drawStyles'), 400);
			messageEl.innerHTML = `It was a draw! You both choose ${value}`;
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;				
		}
		else if(arr[num]=='rock'){
			paperEl.classList.add('winningStyles');
			setTimeout(() => paperEl.classList.remove('winningStyles'), 400);
			userScore++;
			messageEl.innerHTML = `paper<sub>(user)</sub> covers rock<sub>(comp)</sub>. You win!`;	
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;			
		}
		else{
			paperEl.classList.add('losingStyles');
			setTimeout(() => paperEl.classList.remove('losingStyles'), 400);
			compScore++;
			messageEl.innerHTML = `scissor<sub>(comp)</sub> beats paper<sub>(user)</sub>. You lose!`;
			compEl.innerHTML = `${compScore}`;
			userEl.innerHTML = `${userScore}`;			
		}  
	}
}