var name = document.getElementById("card-name").innerHTML = "HEllo" +" "+ localStorage.getItem("getfname")


var startingMin = 20;
var time = startingMin * 60;

var countDowne = document.getElementById("countDowne");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    // seconds = seconds < 30 ? '0' + seconds : seconds;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDowne.innerHTML = `${minutes}:${seconds}`;
    time--;
}

var htmlQuestion = [
    {
        question: "Q1: What does CSS stand for?",
        a: "Creative Style Sheet",
        b: "Cascading Style Sheet",
        c: "Computer Style Sheet",
      
        ans: "ans2",
    },
    {
        question: "Q2: Which HTML attribute is used to define inline styles?",
        a: "styles",
        b: "class",
        c: "style",
        ans: "ans3",
    },
    {
        question: "Q3: Which is the correct CSS syntax?",
        a: "{body;color:black;}",
        b: "body {color:black;}",
        c: "{body:color=black;}",
        ans: "ans2",
    },
    
    {
        question: "Q4: How do you insert a comment in a CSS file?",
        a: "// this is comment",
        b: "/* this is a commment */",
        c: "// this is a comment //",
        ans: "ans2",
    },
    {
        question: "Q5: Which property is used to change the bg-color?",
        a: "background-color",
        b: "bgcolor",
        c: "color",
        ans: "ans1",
    },
    {
        question: "Q6: Which CSS property controls the text size?",
        a: "text-size",
        b: "font-style",
        c: "font-size",
        ans: "ans3",
    },
    {
        question: "Q7: How do you make the text bold?",
        a: "style:bold;",
        b: "font:bold;",
        c: "font-weight:bold;",
        ans: "ans3",
    },
    {
        question: "Q8: How do you select an element with id 'demo'?",
        a: ".demo",
        b: "*demo",
        c: "#demo",
        ans: "ans3",
    },
    {
        question: "Q9: How do you group selectors?",
        a: "Separate each selecter with a comma",
        b: "Separate each selecter with a space",
        c: "Separate each selecter with a plus sign",
        ans: "ans1",
    },
    {
        question: "Q10: What is default value of position property?",
        a: "fixed",
        b: "relative",
        c: "static",
        ans: "ans3",
    },
    {
        question: "Q11: How do select elements with class name 'test'?",
        a: ".test",
        b: "#test",
        c: "*test",
        ans: "ans1",
    },
    {
        question: "Q12 : How doselect all p elements inside a div element?",
        a: "div + p",
        b: "div p",
        c: "div.p",
        ans: "ans2",
    },
   
    {
        question: "Q13: Which HTML is used to define an internal style sheet?",
        a: "<'style'>",
        b: "<'script'>",
        c: "<'css'>",
        ans: "ans1",
    },
]
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var next = document.getElementById("next");
var answers = document.getElementsByName("answers");
var showScore = document.getElementById("showScore");

var count = 0;
var score = 0;
var questionBack = 13;

function newQuestion() {

    var qusetionList = htmlQuestion[count];

    question.innerHTML = qusetionList.question;
    option1.innerHTML = qusetionList.a;
    option2.innerHTML = qusetionList.b;
    option3.innerHTML = qusetionList.c;
    
}
newQuestion();

function getCheckAnswer() {
    var answer;

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
        }
    }
    return answer;
}

function dselectAll() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

next.addEventListener("click", () => {
    var checkedAnswer = getCheckAnswer();
    

    if (checkedAnswer === htmlQuestion[count].ans) {
        score++;
    }

    count++;

    dselectAll();

    if (count < htmlQuestion.length) {
        newQuestion();
    }
    else if (score > 11) {
        showScore.innerHTML = `
          <h4 id="heading50"> Congratulation You Have Passed ${score}/${htmlQuestion.length}  </h4>
          <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
    }
    else {
        showScore.innerHTML = `
          <h4 id="heading50"> You  Are Fail ${score}/${htmlQuestion.length}  </h4>
          <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
    }
})

