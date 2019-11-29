function specialMultiply(a,b) {
    if(arguments.length === 1) {
        return function(b) {
            return a*b;
        }
    }
    return a*b;
}

function guessingGame(amount) {
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess) {
        if(!completed) {
            guesses++;
            if(guess == answer) {
                completed = true;
                return "You got it!";
            }
            else if(guess>answer) return "Your guess id to high!";
            else if(guess<answer) return "YOur guess is to low!";
            else if(guesses === amount) {
                completed = true;
                return "No more guesses the answer was "+ answer;
            }
        }
        return "All done playing!";
    }
} 