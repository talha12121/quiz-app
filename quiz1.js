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
        question: "Q1: What Does HTML Stand For?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyper and Text Marked Language",
        ans: "ans1",
    },
    {
        question: "Q2: Who is making the Web standards?",
        a: "Mozilla",
        b: "Google",
        c: "The World Wide Web Consortium",
        ans: "ans3",
    },
    {
        question: "Q3: Choose correct HTML for largest heading:",
        a: "heading",
        b: "heading2",
        c: "<'h1'>",
        ans: "ans3",
    },
    
    {
        question: "Q4: What is the HTML for adding a bg-color?",
        a: "body bg='yellow'",
        b: "<'body style='background-color:yellow;'>",
        c: "yellow",
        ans: "ans2",
    },
    {
        question: "Q5: Choose correct element to define imp text",
        a: "i",
        b: "<'strong'>",
        c: "important",
        ans: "ans2",
    },
    {
        question: "Q6: Choose correct HTML to define emp text",
        a: "<'em'>",
        b: "i",
        c: "italic",
        ans: "ans1",
    },
    {
        question: "Q7: Which character is used to indicate an end tag?",
        a: "/",
        b: "<",
        c: ">",
        ans: "ans3",
    },
    {
        question: "Q8: Which of these elements are <'table'> elements?",
        a: "<'table'> <'tr'> <'td'>",
        b: "<'table'> <'td'> <'tr'>",
        c: "<'table'> <'tr'> <'tt'>",
        ans: "ans1",
    },
    {
        question: "Q9: How can you make a numbered list?",
        a: "<'dl'>",
        b: "<'ol'>",
        c: "<'list'>",
        ans: "ans2",
    },
    {
        question: "Q10: How can you make a bulleted list?",
        a: "<'list'>",
        b: "<'ol'>",
        c: "<'ul'>",
        ans: "ans3",
    },
    {
        question: "Q11: What is correct HTML for making checkbox?",
        a: "<'input type='checkbox''>",
        b: "<'check'>",
        c: "<'input type='check''>",
        ans: "ans1",
    },
    {
        question: "Q12: Which doctype is correct for HTML5?",
        a: "<'!DOCTYPE html'>",
        b: "<'!DOCTYPE HTML5'>",
        c: "<'!DOCTYPE html public'>",
        ans: "ans1",
    },
   
    {
        question: "Q13: In HTML, onblur and onfocus are:",
        a: "HTML Elements",
        b: "Event Attributes",
        c: "Style Attributes",
        ans: "ans2",
    },
    {
        question: "14: Graphics defined by SVG is in which format?",
        a: "XML",
        b: "CSS",
        c: "HTML",
        ans: "ans1",
    },
    {
        question: "Q15: Which input type defines a slider control?",
        a: "slider",
        b: "search",
        c: "range",
        ans: "ans3",
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
var questionBack = 15;

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
    else if (score > 12) {
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

