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

//const obj = JSON.parse(JSON.stringify(text.question.answers[0].id))
const obj1 = JSON.parse(JSON.stringify(text))
let ansCurnet;

let answersDOM = document.getElementById('answers');
let question = document.querySelector('.question');
let button = document.querySelector('.button');

question.innerHTML = obj1.slides[0].question.que;
let indexQue = 0;
ReplaQuestion();
function ReplaQuestion(){
let ansArr = obj1.slides[indexQue].question.answers;
let ans =``;

for(let i = 0; i < ansArr.length ; i++) {
    ans += `<div class="Answers" onclick="checkAns(${i})">A<p2>${ansArr[i].ans}</p2></a></div>`;
    // Answers[i].innerHTML = obj1.slides[indexQue].question.answers[i].ans;
};
answersDOM.innerHTML =  ans;
}


function checkAns(ans){
    ansCurnet = ans;
    let Answers = document.querySelectorAll('.Answers');
    console.log("ans", ans);
    Answers.forEach( answer => {
        answer.style.backgroundColor = "";
    });
    Answers[ans].style.backgroundColor = 'blue';


}

// button.addEventListener("click", (e) => {
//     console.log(e)
// });
let choice = 0;
let clic = false;
for (i = 0; i < Answers.length; i++) {
    Answers[i].addEventListener("click", (e) => {
           Answers.forEach( answer => {
                answer.style.backgroundColor = "";
            });

            console.log(e.target)
            e.target.style.backgroundColor = 'blue';
    });
}
button.addEventListener("click", (e) => {
    indexQue++
    Answers.forEach( answer => {
        answer.style.backgroundColor = "";
    })


    question.style.backgroundColor = "";
    if(indexQue == 3){
        
        question.style.display = "none";
        for(let i = 0; i < Answers.length ; i++){
            
            Answers[i].style.display = "none";
        } 
        
    }
    question.innerHTML = obj1.slides[indexQue].question.que;
    ReplaQuestion();

  
});