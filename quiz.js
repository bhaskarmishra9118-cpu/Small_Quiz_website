
let options = document.querySelectorAll(".options");
let submit = document.querySelector(".submit");
let option1 = document.querySelector("#firstoption");
let option2 = document.querySelector("#secondoption");
let option3 = document.querySelector("#thirdoption");
let option4 = document.querySelector("#forthoption");
let question = document.querySelector(".heading");

let pagecontent = [
    {
        question : "What is the full form of HTML?",
        options1: "Hyper Text Markup Language",
        options2: "Http Text Markup Language",
        options3: "Hyper Text Mark Language",
        options4: "Hydra Text Markup Language",
        ans: "1"
    },
    {
        question : "What is the full form of CSS?",
        options1: "Cascading Style Sheet",
        options2: "Casecad Styling Sheet",
        options3: "Case Style Sheet",
        options4: "Common Style Sheet",
        ans: "1"
    },
    {
        question : "What is JS?",
        options1: "Javscript",
        options2: "Javascritp",
        options3: "JavaScript",
        options4: "None of These",
        ans: "3"
    },
    {
        question : "What is the full form of DP?",
        options1: "Dynamic Program",
        options2: "Dynamics Program",
        options3: "Dynamic Programming",
        options4: "None of These",
        ans: "3"
        
    },
    
];
const deselectAll = () => {
    options.forEach((element) => (element.checked = false));
};


let score = 0;
let pagecount = 0;

const showcontent = () => {
    question.innerHTML = pagecontent[pagecount].question;
    option1.innerHTML = pagecontent[pagecount].options1;
    option2.innerHTML = pagecontent[pagecount].options2;
    option3.innerHTML = pagecontent[pagecount].options3;
    option4.innerHTML = pagecontent[pagecount].options4;
};
showcontent();

const checkans = () => {
    let answer;
    options.forEach((element) => {
        if (element.checked) {
            answer = element.id;
            return answer
            
        }
    
    });
    
};

submit.addEventListener("click", () => {
    let checkedAnswer = checkans();
    deselectAll()
    
    if (checkedAnswer === pagecontent[pagecount].ans) {
        score++;
        console.log("you score" +score);
    }

    pagecount++;

    if (pagecount < pagecontent.length) {
        showcontent();
    } else {
        alert("Quiz End! Your Score: " + score);
        submit.disabled = true;
    }
});
