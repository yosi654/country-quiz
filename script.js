let text = {
    "slides": [
        {
            "question": {
                "que": " : יובל סטופל הוא ",
                "src": null,
                "answers": [
                    {
                        "id": 0,
                        "ans": "מלחין ומעבד",
                        "correct": false
                    },
                    {
                        "id": 1,
                        "ans": "מנצח",
                        "correct": false
                    },
                    {
                        "id": 2,
                        "ans": "מגיש תוכנית בקול חי מיוזיק",
                        "correct": false
                    },
                    {
                        "id": 3,
                        "ans": "כל התשובות נכונות",
                        "correct": true
                    }
                ]
            },  
        },
        {
            "question": {
                "que": " ...אברהם פריד שר בדואט עם",
                "src": null,
                "answers": [
                    {
                        "id": 0,
                        "ans": "נפתלי קמפה",
                        "correct": false
                    },
                    {
                        "id": 1,
                        "ans": "ארי היל",
                        "correct": false
                    },
                    {
                        "id": 2,
                        "ans": "אלי מרקוס",
                        "correct": false
                    },
                    {
                        "id": 3,
                        "ans": "כל התשובות נכונות",
                        "correct": true
                    }
                ]
            },
        },
        {
            "question": {
                "que": " ? מי מבצע את השיר ",
                "src": "אברהם פריד - אוטוטו.mp3",
                "answers": [
                    {
                        "id": 0,
                        "ans": "יעקב שוואקי",
                        "correct": false
                    },
                    {
                        "id": 1,
                        "ans": "מרדכי בן דוד",
                        "correct": false
                    },
                    {
                        "id": 2,
                        "ans": "אברהם פריד",
                        "correct": true
                    },
                    {
                        "id": 3,
                        "ans": "בני פרידמן",
                        "correct": false
                    }
                ]
            },
        }
    ]
}

const obj1 = JSON.parse(JSON.stringify(text))
let ansCurnet = -1;

let answersDOM = document.getElementById('answers');
let noChoice = document.getElementById('noChoice');
let question = document.querySelector('.question');
let button = document.querySelector('.button');

question.innerHTML = obj1.slides[0].question.que;
let indexQue = 0;
ReplaQuestion();
function ReplaQuestion(){
let ansArr = obj1.slides[indexQue].question.answers;
let ans =``;

for(let i = 0; i < ansArr.length ; i++) {
    ans += `<div class="Answers" onclick="checkAns(${i})"><p2>${ansArr[i].ans}</p2></div>`;
};
answersDOM.innerHTML =  ans;
}


let Answers = document.querySelectorAll('.Answers');
function checkAns(ans){
    Answers = document.querySelectorAll('.Answers');
    ansCurnet = ans;
    console.log("ans", ans);
    Answers.forEach( answer => {
        answer.style.backgroundColor = "";
    });
    Answers[ans].style.backgroundColor = 'blue';


}


let choice = 0;

button.addEventListener("click", (e) => {
    if(ansCurnet == -1){
        noChoice.innerText = "לא הוקש";
        noChoice.style.color = "red";
    }
    if(indexQue< 3 ){
        if(obj1.slides[indexQue].question.answers[ansCurnet].correct == true){
            choice++;
        }
        indexQue++
        question.innerHTML = obj1.slides[indexQue].question.que;
        ReplaQuestion();
        
    }
    Answers.forEach( answer => {
        answer.style.backgroundColor = "";
    })


    question.style.backgroundColor = "";
    if(indexQue == 3){
        
        question.style.display = "none";
        answersDOM.style.display = "none";
        
        console.log(choice);
    }
  
});