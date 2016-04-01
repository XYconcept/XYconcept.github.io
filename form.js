var correct = 0,
    incorrect = 0,
    question = [],
    radios = [],
    radioLabels = [],
    question_number = 0,
    question_picker,
    radios,
    deletion,
    score,
    i,
    questionHTML = document.getElementById("question"),
    answersHTML = document.getElementById("answers"),
    question_numberHTML = document.getElementById("questionNumber"),
    labelText = 0,
    randomRadio = 0,
    startQuiz = document.getElementById("startQuiz"),
    quizBox = document.getElementById("quizBox");



question[0] = {q: "",
              a1: "",
              a2: "",
              a3: "",
              a4: ""};

question[1] = {q: "",
              a1: "",
              a2: "",
              a3: "",
              a4: ""};

question[2] = {q: "",
              a1: "",
              a2: "",
              a3: "",
              a4: ""};

question[3] = {q: "",
              a1: "",
              a2: "",
              a3: "",
              a4: ""};

question[4] = {q: "",
              a1: "",
              a2: "",
              a3: "",
              a4: ""};

question[5] = {q: "",
              a1: "",
              a2: "",
              a3: "",
              a4: ""};

question[6] = {q: "",
               a1: "",
               a2: "",
               a3: "",
               a4: ""};

question[7] = {q: "",
               a1: "S",
               a2: "",
               a3: "",
               a4: ""};

question[8] = {q: "",
               a1: "",
               a2: "",
               a3: "",
               a4: ""};

question[9] = {q: "",
               a1: "",
               a2: "",
               a3: "",
               a4: ""};

question[10] = {q: "",
                a1: "",
                a2: "",
                a3: "",
                a4: ""};

question[11] = {q: "",
                a1: "",
                a2: "",
                a3: "",
                a4: ""};


                
// This function is run after CheckAnswer() and displays all of the quiz questions
function newQuestion() {
    // Checks if there are elements on the page to remove
    if (question_picker !== undefined) {
        var counter = 0;
        while (counter !== 16) {
            deletion = answersHTML.lastChild;
            deletion.remove();
            counter = counter + 1;
        }
    }
    
    // Checks if the quiz is over
    if (question.length === 0) {
        score = (correct / 40) * 100 + "%";
        questionHTML.innerHTML = "Thanks for taking the quiz!";
        answersHTML.innerHTML = "You scored: " + correct + " Correct and " + incorrect + " Incorrect!<br>You're total score is: " + score + "!";
        return;
    }
    
    // Random Number Generator
    question_picker = Math.floor(Math.random() * question.length);
    
    // Shows the Question
    questionHTML.innerHTML = question[question_picker].q;
    
    // This function is looped through to create radio buttons
    function createRadios(radioVar) {
        var theInput = radios[radioVar],
            theLabel = radioLabels[radioVar];
        
        // Create the Input tag for each answer
        theInput = document.createElement("INPUT");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("id", radioVar);
        theInput.setAttribute("class", "radioInput");
        theInput.setAttribute("value", radioVar);
        theInput.setAttribute("name", "css1");
        theInput.setAttribute("onclick", "checkAnswer();");
        answersHTML.appendChild(theInput);
        
        // Create corresponding Label for each Input
        theLabel = document.createElement("LABEL");
        theLabel.setAttribute("for", radioVar);
        theLabel.setAttribute("class", radioVar);
        
        // There is a loop right outside this function that will return a, b, c, d. This checks which it is
        if (radioVar === "a") {
            labelText = document.createTextNode(" " + question[question_picker].a1);
        } else if (radioVar === "b") {
            labelText = document.createTextNode(" " + question[question_picker].a2);
        } else if (radioVar === "c") {
            labelText = document.createTextNode(" " + question[question_picker].a3);
        } else {
            labelText = document.createTextNode(" " + question[question_picker].a4);
        }
        
        // Set both to the bottom of the div
        theLabel.appendChild(labelText);
        answersHTML.appendChild(theLabel);
        
        
        // Create <br> tag
        var br = document.createElement("BR");
        br.setAttribute("class", "quizBR");
        answersHTML.appendChild(br);
        
        // Create <hr> tag
        var hr = document.createElement("HR");
        answersHTML.appendChild(hr);
    }
    
    
    // This array is looped through to randomly set answers
    radios = ["a", "b", "c", "d"];
    
    // Randomly generate a new number
    randomRadio = Math.floor(Math.random() * radios.length);
    
    // This loops through creating each radio
    radios.unshift(radios.splice(randomRadio, 1)[0]);
    for (i = 0; i < radios.length; ++i) {
        createRadios(radios[i]);
    }
    
    // This shows the question number at the bottom of each quiz question
    question_number = question_number + 1;
    question_numberHTML.innerHTML = question_number + " / 40";
    
    
    // Remove the question from the array so it is not duplicated
    question.splice(question_picker, 1);
    
}

// This is the first function that is run whenever an answer is clicked
function checkAnswer() {
    var a = document.getElementById("a");
    // Get the Radio Buttons
    if (a.checked) {
        ++correct;
        // Adds CSS transition
        quizBox.classList.add("correct");
        window.setTimeout(function () {quizBox.classList.remove("correct"); }, 400);
    } else {
        ++incorrect;
        // Adds CSS transition
        quizBox.classList.add("incorrect");
        window.setTimeout(function () {quizBox.classList.remove("incorrect"); }, 400);
    }
    // Runs the function that creates the quiz questions / answers
    newQuestion();
}

// When the quiz is started, hides the New Question button
function quizStarter() {
    startQuiz.style.display = 'none';
    newQuestion();
}