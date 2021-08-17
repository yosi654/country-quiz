let text = {
    "slides": [
        {
            "question": {
                "que": "יובל סטופל הוא:",
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
            "openMedia": {
                "src": "1"
            },
            "endMedia": null,
            "vote": {
                "question": {
                    "que": "יובל סטופל הוא:",
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
                "showAns": true
            }
        },
        {
            "question": {
                "que": "אברהם פריד שר בדואט עם...",
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
            "openMedia": {
                "src": "1"
            },
            "endMedia": null,
            "vote": {
                "question": {
                    "que": "אברהם פריד שר בדואט עם...",
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
                "showAns": true
            }
        },
        {
            "question": {
                "que": "מי מבצע את השיר?",
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
            "openMedia": {
                "src": "1"
            },
            "endMedia": null,
            "vote": {
                "question": {
                    "que": "מי מבצע את השיר?",
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
                "showAns": true
            }
        }
    ]
}

//const obj = JSON.parse(JSON.stringify(text.question.answers[0].id))
const obj1 = JSON.parse(JSON.stringify(text))



let question = document.querySelector('.question');
let Answers = document.querySelectorAll('.Answers');
let button = document.querySelector('.button');

question.innerHTML = obj1.slides[0].question.que;
let indexQue = 0;

for(let i = 0; i < Answers.length ; i++) {
    Answers[i].innerHTML = obj1.slides[indexQue].question.answers[i].ans;
};


button.addEventListener("click", (e) => {
   console.log(e)
});
let clic = false;
for (i = 0; i < Answers.length; i++) {
    Answers[i].addEventListener("click", (e) => {
        if(clic == false){
      console.log(e.target)
      e.target.style.backgroundColor = 'blue';
      clic = true;
    }
    });
}
button.addEventListener("click", (e) => {
    indexQue++
    if(indexQue == 4){
       //question.src = "/Goblet.jpg";
        for(let i = 0; i < Answers.length ; i++){
            
            Answers[i].style.display = "none";
        } 
        
    }
    for(let i = 0; i < Answers.length ; i++){
    
    Answers[i].innerHTML = obj1.slides[indexQue].question.answers[i].ans;
  }
  
});