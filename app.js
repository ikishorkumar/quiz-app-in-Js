let Questions = [
  {
    question: "What is the name of Draco Malfoy's son?",
    answers: ["Scorpius", "Lucius", "Diego", "Severus", "Dane"],
    correct: "Scorpius",
  },

  {
    question: "What creature does Dumbledore have as a pet?",
    answers: ["Efreet", "Fey", "Troll", "Phoenix", "Basilisk"],
    correct: "Phoenix",
  },

  {
    question: "What is Voldemort's final horcrux?",
    answers: ["A mirror", "A snake", "A brooch", "Harry Potter", "A violin"],
    correct: "A snake",
  },

  {
    question:
      "Who takes over as headmaster of Hogwarts after Dumbledore's death?",
    answers: [
      "Voldemort",
      "Narcissa Black",
      "Professor Trelawny",
      "Delores Umbridge",
      "Professor Snape",
    ],
    correct: "Professor Snape",
  },

  {
    question:
      "Who killed Deatheater Antonin Dolohov during the Battle of Hogwarts?",
    answers: [
      "Professor Flitwick",
      "Ron Weasley",
      "Falling Debris",
      "Hermione Granger",
      "A Troll",
    ],
    correct: "Professor Flitwick",
  },
];

let maindiv = document.getElementById("quizdiv");
let correct = document.getElementById("correct");
let incorrect = document.getElementById("incorrect");
let cor = 0;
let icor = 0;
let i = 0;
function nextitem(ans) {
  if (ans === Questions[i].correct) {
    cor += 1;
    correct.innerHTML = cor;
    i = i + 1;
    quiz();
  } else {
    icor += 1;
    incorrect.innerHTML = icor;
    i = i + 1;
    quiz();
  }
}
function quiz() {
  let singlequestion = document.getElementById("singlequestion");
  if (singlequestion != null) {
    singlequestion.remove();
  }
  let qdiv = document.createElement("div");
  qdiv.setAttribute("id", "singlequestion");

  if (i >= Questions.length) {
    maindiv.innerHTML = "Your Socre is : " + cor;
    let btn2 = document.createElement("button");
    btn2.innerText = "Play Again";
    btn2.addEventListener("click", () => {
        i = 0;
        cor = 0;
        icor = 0;
        correct.innerHTML = 0;
        incorrect.innerHTML = 0;
        maindiv.innerHTML = '';
        quiz();
    });
    maindiv.append(document.createElement('br'));
    maindiv.append(btn2);
  } else {
    let ques = document.createElement("h2");
    ques.innerHTML = ` Q#${i+1} :  ${Questions[i].question}`;
    qdiv.append(document.createElement('br'));
    qdiv.append(ques);
    Questions[i].answers.forEach((answer, index) => {
      let btn = document.createElement("button");
      btn.setAttribute("id", answer);
      btn.addEventListener("click", () => nextitem(answer));
      btn.innerHTML = answer;
      qdiv.append(document.createElement('br'));

      qdiv.appendChild(btn);
    });
    maindiv.append(qdiv);
  }
}

quiz();
