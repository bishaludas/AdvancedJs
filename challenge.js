
(function(){
    var score = 0;
    function Question(question, ansArr, correct){
        this.question = question;
        this.answers = ansArr;
        this.correct = correct;
    }
    
    
    Question.prototype.displayQuestions = function() {
        console.log(this.question);
    
        for(var i = 0;  i < this.answers.length ; i++){
            console.log(i +': '+ this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct){
            score++;
            console.log('Correct Answer'+' Your score is '+score);
            console.log('--------------------------');
        }else{
            console.log('Sorry. Incorrect Answer ' +score);
        }
    }
    
    var q1 = new Question("Do you like js ?", ['yes', 'No'],0);
    var q2 = new Question("Who is the teacher of course ?", ['Bishal','Jane', 'Johnas'],2);
    var q3 = new Question("Will you do js project ?", ['Yes', 'Maybe', 'No'],1);
    
    var questions = [q1, q2, q3];

    
    function nextQuestion(){
        var num = Math.floor(Math.random()* questions.length);
        questions[num].displayQuestions();
        
        var ans =prompt("Give your aswer fool.");
         

        if(ans !== "exit"){
            questions[num].checkAnswer(parseInt(ans));
            nextQuestion();
        }
        
    }
    
    nextQuestion();
})();





