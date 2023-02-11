let questionPool = [
{
    question: "- \nHow long is an Olympic swimming pool (in meters)?",
    options: {
        a: '14',
        b: '35',
        c: '50\n'
    },
correctAnswer: 'c'
},
{
    question: "- What countries made up the original Axis powers in World War II?",
    options: {
        a: 'Germany, Italy, Japan',
        b: 'Ecuador, Vietnam, Brazil',
        c: 'Russia, Cuba, China\n'
    },
correctAnswer: 'a'
},
{
    question: "-\n Which country do cities of Perth, Adelade & Brisbane belong to?",
    options: {
        a: 'South Africa',
        b: 'Australia',
        c: 'Ireland\n'
    },
correctAnswer: 'b'
    
},
{
    question: "- \nWhat is 'cynophobia'?",
    options: {
        a: 'Fear of Ducks',
        b: 'Fear of Frogs',
        c: 'Fear of cynops\n'
    },
correctAnswer: 'b'
},
{
    question: "- \nWho named the Pacific Ocean?",
    options: {
        a: 'Cristopher Columbus',
        b: 'Francisco Pizarro',
        c: 'Ferdinand Magellan\n'
    },
correctAnswer: 'c'
}
];

let triviaOutput = document.getElementById('trivia');
let resultsHere = document.getElementById('results');
let submitAnswers = document.getElementById('submit');

function showTrivia(questions, triviaOutput, resultsHere, submitAnswers){

    function showQuestions(questions, triviaOutput){
        
        var output = [];
        var choices;

        for(var i=0; i<questions.length; i++){
        
        choices = [];

        for(letter in questions[i].options){
        
            choices.push(
            '<label>'
                +'<br>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].options[letter]
                +'<br>'
            + '</label>'
            +'<br>'
            );
        }

        output.push(
            '<br>'+
            '<div class="question">' + questions[i].question + '</div>'+
            '<div class="answers">' + choices.join('') + '</div>'
        );
        }

        triviaOutput.innerHTML = output.join('');
    }

    function showResults(questions, triviaOutput){
                
        var answerContainers = triviaOutput.querySelectorAll('.answers');        
        
        var input = '';
        var totalPoints = 0;        
      
        for(var i=0; i<questions.length; i++){

    
            input = (answerContainers[i].querySelector('input[name=question'+i+']:checked')).value;
        
        
        if(input===questions[i].correctAnswer){

            answerContainers[i].style.color = 'green';            
            totalPoints++;
            
        }else{

            var struck = answerContainers[i];
            struck.style.color = 'grey';            
            '<s>'+struck+'</s>';
        }
        }
    
        resultsHere = document.getElementById('results').innerHTML = totalPoints + ' out of ' + questions.length;
        document.getElementById("submit").setAttribute('value', "Submitted")
        document.getElementById("submit").disabled = true;
        alert("Submitted Let's see how well you did!");

    }
 
    showQuestions(questions, triviaOutput);

    submitAnswers.onclick = function(){
        showResults(questions, triviaOutput, resultsHere);
    }

    }

showTrivia(questionPool, triviaOutput, resultsHere, submitAnswers);

