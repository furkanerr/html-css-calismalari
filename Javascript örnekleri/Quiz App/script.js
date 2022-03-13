const quiz = [
  {
    question: "Question example1",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "a",
  },
  {
    question: "Question example2",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "b",
  },
  {
    question: "Question example3",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "c",
  },
  {
    question: "Question example4",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "d",
  },
];

let correctAnswers = 0;
let wrongAnswers = 0;

let currentQuestion = 0;

function SoruCoz(params) {
  document.getElementById("question").innerText =
    quiz[currentQuestion].question;
  document.getElementById("a").innerText = quiz[currentQuestion].a;
  document.getElementById("b").innerText = quiz[currentQuestion].b;
  document.getElementById("c").innerText = quiz[currentQuestion].c;
  document.getElementById("d").innerText = quiz[currentQuestion].d;

  let cevap = document.querySelector('input[name="cevap"]:checked').textContent;

  if (cevap != quiz[currentQuestion].correct) {
    wrongAnswers++;
  } else {
    correctAnswers++;
  }
}

document.getElementById("button").addEventListener("click", function () {
  if (currentQuestion < 4) {
    SoruCoz();
  } else {
    alert("You finished. ");
    alert(correctAnswers);
  }

  currentQuestion++;
  console.log(currentQuestion);
});
