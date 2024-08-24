document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissor').addEventListener('click', function() {
    playGame('scissor');
});
function computerchoice(){
    const choice=['rock','paper','scissor'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}
function determinewiner(userchoice,compchoice){
     let result = '';
     if(compchoice===userchoice){
        result="It's A Draw!"
    }
   
    else if((compchoice==='rock' && userchoice==='paper'||compchoice==='paper' && userchoice==='scissor'||compchoice==='scissor' && userchoice==='rock' )){
        
           result="User Wins!"
    
}
        else{
            result="User Loose!";
        }
        document.getElementById('result').innerText = `Computer chose ${compchoice}.${result}`;
    }
    function playGame(userchoice) {
        const compchoice = computerchoice();
        determinewiner(userchoice, compchoice);
    }

