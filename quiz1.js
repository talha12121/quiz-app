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

var htmlQuizQuestion = [
    {
        question: "Q1 : What Does HTML Stand For?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyper and Text Marked Language",
        ans: "ans1",
    },
    {
        question: "Q2 : Who is making the Web standards?",
        a: "Mozilla",
        b: "Google",
        c: "The World Wide Web Consortium",
        ans: "ans3",
    },
    {
        question: "Q3 : Choose the correct HTML element for the largest heading:",
        a: "heading",
        b: "heading2",
        c: "<'h1'>",
        ans: "ans3",
    },
    {
        question: "Q4 : What is the correct HTML element for inserting a line break?",
        a: "<'br'>",
        b: "lb",
        c: "break",
        ans: "ans1",
    },
    {
        question: "Q5 : What is the correct HTML for adding a background color?",
        a: "body bg='yellow'",
        b: "<'body style='background-color:yellow;''>",
        c: "yellow",
        ans: "ans2",
    },
    {
        question: "Q6 : Choose the correct HTML element to define important text:",
        a: "i",
        b: "<'strong'>",
        c: "important",
        ans: "ans2",
    },
    {
        question: "Q7 : Choose the correct HTML element to define emphasized text:",
        a: "<'em'>",
        b: "i",
        c: "italic",
        ans: "ans1",
    },
    {
        question: "Q8 : Which character is used to indicate an end tag?",
        a: "/",
        b: "<",
        c: "*",
        ans: "ans1",
    },
    {
        question: "Q9 : Which of these elements are all <'table'> elements?",
        a: "<'table'> <'tr'> <'td'>",
        b: "<'table'> <'td'> <'tr'>",
        c: "<'table'> <'tr'> <'tt'>",
        ans: "ans1",
    },
    {
        question: "Q10 : How can you make a numbered list?",
        a: "<'dl'>",
        b: "<'ol'>",
        c: "<'list'>",
        ans: "ans2",
    },
    {
        question: "Q11 : How can you make a bulleted list?",
        a: "<'list'>",
        b: "<'ol'>",
        c: "<'ul'>",
        ans: "ans3",
    },
    {
        question: "Q12 : What is the correct HTML for making a checkbox?",
        a: "<'input type='checkbox''>",
        b: "<'check'>",
        c: "<'input type='check''>",
        ans: "ans1",
    },
    {
        question: "Q13 : What is the correct HTML for making a text input field?",
        a: "<'input type='text''>",
        b: "<'textfield'>",
        c: "<'input type='textfield''>",
        ans: "ans1",
    },
    {
        question: "Q14 : What is the correct HTML for making a drop-down list?",
        a: "<'input type='dropdown''>",
        b: "<'select'>",
        c: "<'input type='list''>",
        ans: "ans2",
    },
    {
        question: "Q15 : Which HTML element defines the title of a document?",
        a: "<'meta'>",
        b: "<'head'>",
        c: "<'title'>",
        ans: "ans3",
    },
    {
        question: "Q16 : Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed",
        a: "title",
        b: "alt",
        c: "longdesc",
        ans: "ans2",
    },
    {
        question: "Q17 : Which doctype is correct for HTML5?",
        a: "<'!DOCTYPE html'>",
        b: "<'!DOCTYPE HTML5'>",
        c: "<'!DOCTYPE html public'>",
        ans: "ans1",
    },
    {
        question: "Q18 : Which HTML element is used to specify a footer for a document or section?",
        a: "<'footer'>",
        b: "<'bottom'>",
        c: "<'section'>",
        ans: "ans1",
    },
    {
        question: "Q19 : What is the correct HTML element for playing video files?",
        a: "<'vedio'>",
        b: "<'media'>",
        c: "<'movie'>",
        ans: "ans1",
    },
    {
        question: "Q20 : What is the correct HTML element for playing audio files?",
        a: "<'sound'>",
        b: "<'audio'>",
        c: "<'mp4'>",
        ans: "ans2",
    },
    {
        question: "Q21 : In HTML, onblur and onfocus are:",
        a: "HTML Elements",
        b: "Event Attributes",
        c: "Style Attributes",
        ans: "ans2",
    },
    {
        question: "Q22 : Graphics defined by SVG is in which format?",
        a: "XML",
        b: "CSS",
        c: "HTML",
        ans: "ans1",
    },
    {
        question: "Q23 : In HTML, which attribute is used to specify that an input field must be filled out?",
        a: "placeholder",
        b: "formvalidate",
        c: "required",
        ans: "ans3",
    },
    {
        question: "Q24 : Which input type defines a slider control?",
        a: "slider",
        b: "search",
        c: "range",
        ans: "ans3",
    },
    {
        question: "Q25 : Which HTML element is used to specify a header for a document or section?",
        a: "<'section'>",
        b: "<'head'>",
        c: "<'header'>",
        ans: "ans3",
    },
]
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var next = document.getElementById("next");
var answers = document.getElementById("answer");
var showScore = document.getElementById("showScore");

var qusetionCount = 0;
var score = 0;
var questionBack = 25;

function nextQuestion() {

    var qusetionList = htmlQuizQuestion[qusetionCount];
    question.innerHTML = qusetionList.question;
    option1.innerHTML = qusetionList.a;
    option2.innerHTML = qusetionList.b;
    option3.innerHTML = qusetionList.c;
   
}
nextQuestion();

