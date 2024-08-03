// My smart ass kids responses to my questions
const responses = [
      "You're preaching to the choir!",
      "I know everything!",
      "Don't tell me.  Tell Jacob!",
      "I don't want to hear it!",
      "Can you take it somewhere else?",
      "Your words mean nothing.",
      "No, thank you.",
      "Oh, I didn't?...Oh Well."
]

let question = null;
let response = null;

//initalize the game
question = prompt('Welcome to Magic Eight Ball.\nTo stop the game, enter the word, \"stop\".\nPlease enter a question: ');
console.log("Your question: " + question.toLowerCase());

//loop to ask question and get magic ball response
if (question.toLowerCase() !== 'stop') {
      while (question.toLowerCase() !== 'stop' || question.toLowerCase() !== null) {  //begin while loop
            const randomIndex = Math.floor(Math.random() * responses.length);
            response = responses[randomIndex];
            console.log("Magic Eight Ball Response:  " + response);
            question = prompt('\nPlease enter another question:  ');
            console.log("Your question: " + question);
            if (question.toLowerCase() === 'stop')
                  break;
      }  //end while loop*/
}



