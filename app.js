
var scores, roundScore, activePlayer, gamePlayering;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    //do something here
    //1. Random number
    if (gamePlayering) {
        var dice = Math.floor(Math.random()*6) + 1;

        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display ='block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. update the round socre if the rolled was not a 1  
        if (dice !== 1){
            //add score
            roundScore +=dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();

        }
    }
    
});
    
    document.querySelector('.btn-hold').addEventListener('click', function() {
       // ADD CURRENT score to GLOBAL score
        if (gamePlayering){
            scores[activePlayer] +=roundScore;

            //update the ui
            document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];

            // check who wins
            if (scores[activePlayer] >= 100){
                document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlayering = false;

            }else {
                // next player
                nextPlayer();
            } 
        }
        
    });
    
    
function nextPlayer(){
       //Next player
        activePlayer = activePlayer === 1? 0 : 1;
        roundScore = 0;
        document.getElementById('current-0').textContent ='0';
        document.getElementById('current-1').textContent ='0';
        
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        
    
}


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;  
    gamePlayering = true;
    document.querySelector('.dice').style.display ='none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('#name-0').textContent = 'Player1';
    document.querySelector('#name-1').textContent='Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    
    document.querySelector('.player-0-panel').classList.add('active');
    
}
















