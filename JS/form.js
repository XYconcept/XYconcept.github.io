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



question[0] = {q: "Driving down the road, you realize you need to fill up your gas tank and you have $20 left in your pocket. If gas costs $1.89 a gallon, how many gallons of gas you can put into your car?",
              a1: "10.5 gallons",
              a2: "11.4 gallons",
              a3: "10.2 gallons",
              a4: "9.8 gallons"};

question[1] = {q: "The tool used to measure earthquakes is called the Richter Scale, and it is measured in the base of 10 to the exponent of the magnitude. How much larger is a earthquake that measure 10^8 than an earthquake that measures 10^6?",
              a1: "9.9*10^7",
              a2: "8.7*10^4",
              a3: "9*10^6",
              a4: "7.9*10^9"};

question[2] = {q: "As you search online to find a new car you see that the price is $20,000 for a new model. Looking at a used version of the same car that is 3 years older, the used version is ¼ of the cost of the new model. How much is the used version of the vehicle?",
              a1: "$5,000",
              a2: "$4,000",
              a3: "$1,000",
              a4: "$3,000"};

question[3] = {q: "Completing a purchase as a cashier, someone gives you $50 for a couple of items that total out to $32.40. How much in change do you give back to that person?",
              a1: "$17.60",
              a2: "$7.60",
              a3: "$20",
              a4: "$16.70"};

question[4] = {q: "A supplementary angle is how many degrees?",
              a1: "2 angles that add up to 180 degrees",
              a2: "1 angle that's 180 degrees",
              a3: "1 angle that's 90 degrees",
              a4: "2 angles that add up to 360 degrees"};

question[5] = {q: "A shape with 9 sides is called a _________________",
              a1: "Nonagon",
              a2: "Hexagon",
              a3: "Decagon",
              a4: "Octagon"};

question[6] = {q: "A line segment that continues on in one direction is called a _____________",
               a1: "Ray",
               a2: "Line Segment",
               a3: "Chord",
               a4: "Line"};

question[7] = {q: "Which of the following formulas is used to calculate the volume of a triangular prism?",
               a1: "1/2*length*width*height",
               a2: "(1/3)area*height",
               a3: "(1/2)base*height",
               a4: "length*width*height"};

question[8] = {q: "A basketball player who shoots 50% goes to the free throw line to take two shots. How many free throws will he make?",
               a1: "1",
               a2: "2",
               a3: "4",
               a4: "5"};

question[9] = {q: "If you have a 6-sided die, what are the chances that you will roll a three?",
               a1: "1/6",
               a2: "1/2",
               a3: "1/5",
               a4: "1/3"};

question[10] = {q: "In a bag of 10 marbles; 4 green, 3 blue, and 3 red, what is the probability of picking out a red marble?",
                a1: "3/10",
                a2: "3/5",
                a3: "4/10",
                a4: "4/5"};

question[11] = {q: "A lottery puts in the names of 317 people. What are the odds that you win if 5 winners are chosen?",
                a1: "1.5%",
                a2: "2%",
                a3: "5%",
                a4: "1%"};



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
        score = (correct / 12) * 100 + "%";
        questionHTML.innerHTML = "Thanks for taking the quiz!";
        answersHTML.innerHTML = "You scored: " + correct + " Correct and " + incorrect + " Incorrect!<br>Your total score is: " + score + "!";
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
    question_numberHTML.innerHTML = question_number + " / 12";


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