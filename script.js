const quizzes = {
  science1: [
    {
      question: "What is the chemical symbol for water?",
      choices: ["O2", "H2O", "CO2", "HO2"],
      answer: "H2O",
    },
    {
      question: "Which part of the plant conducts photosynthesis?",
      choices: ["Root", "Stem", "Leaf", "Flower"],
      answer: "Leaf",
    },
    {
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      answer: "Mitochondria",
    },
    {
      question: "What gas do humans exhale?",
      choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "Which planet is closest to the Sun?",
      choices: ["Earth", "Mars", "Venus", "Mercury"],
      answer: "Mercury",
    },
    {
      question: "What is the boiling point of water at sea level?",
      choices: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C",
    },
    {
      question: "What is the main gas in Earth's atmosphere?",
      choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Nitrogen",
    },
    {
      question: "What organ pumps blood through the body?",
      choices: ["Brain", "Lungs", "Heart", "Liver"],
      answer: "Heart",
    },
    {
      question: "What do bees collect and use to make honey?",
      choices: ["Pollen", "Nectar", "Sap", "Water"],
      answer: "Nectar",
    },
    {
      question: "What part of the cell contains genetic material?",
      choices: ["Nucleus", "Mitochondria", "Cytoplasm", "Ribosome"],
      answer: "Nucleus",
    },
  ],

  science2: [
    {
      question: "What is the process of water turning into vapor called?",
      choices: ["Condensation", "Precipitation", "Evaporation", "Melting"],
      answer: "Evaporation",
    },
    {
      question: "Which organ helps humans breathe?",
      choices: ["Heart", "Liver", "Lungs", "Kidney"],
      answer: "Lungs",
    },
    {
      question: "What type of energy does the Sun produce?",
      choices: ["Mechanical", "Chemical", "Thermal", "Solar"],
      answer: "Solar",
    },
    {
      question: "Which element is essential for human bones?",
      choices: ["Iron", "Calcium", "Sodium", "Potassium"],
      answer: "Calcium",
    },
    {
      question: "How many legs does an insect have?",
      choices: ["4", "6", "8", "10"],
      answer: "6",
    },
    {
      question: "What do we call animals that eat only plants?",
      choices: ["Carnivores", "Omnivores", "Herbivores", "Insectivores"],
      answer: "Herbivores",
    },
    {
      question: "Which force pulls objects towards the Earth?",
      choices: ["Magnetism", "Electricity", "Friction", "Gravity"],
      answer: "Gravity",
    },
    {
      question: "What causes day and night?",
      choices: ["Moon’s rotation", "Earth’s rotation", "Sun’s movement", "Earth’s revolution"],
      answer: "Earth’s rotation",
    },
    {
      question: "Which gas is needed for burning?",
      choices: ["Nitrogen", "Hydrogen", "Oxygen", "Carbon Dioxide"],
      answer: "Oxygen",
    },
    {
      question: "What is the center of an atom called?",
      choices: ["Electron", "Proton", "Nucleus", "Neutron"],
      answer: "Nucleus",
    },
  ],

  math1: [
    {
      question: "What is 9 x 9?",
      choices: ["81", "72", "99", "91"],
      answer: "81",
    },
    {
      question: "Solve: 100 ÷ 4",
      choices: ["20", "25", "30", "40"],
      answer: "25",
    },
    {
      question: "What is the square of 5?",
      choices: ["10", "15", "20", "25"],
      answer: "25",
    },
    {
      question: "What is 15% of 200?",
      choices: ["20", "25", "30", "35"],
      answer: "30",
    },
    {
      question: "What is the value of π (pi) approximately?",
      choices: ["3.12", "3.14", "3.16", "3.18"],
      answer: "3.14",
    },
    {
      question: "What is 2²?",
      choices: ["2", "4", "6", "8"],
      answer: "4",
    },
    {
      question: "Simplify: 4(3 + 2)",
      choices: ["20", "22", "16", "24"],
      answer: "20",
    },
    {
      question: "What is 3⁵?",
      choices: ["125", "243", "81", "216"],
      answer: "243",
    },
    {
      question: "Find the area of a rectangle with length 5 and width 3.",
      choices: ["8", "15", "18", "20"],
      answer: "15",
    },
    {
      question: "What is 0.5 as a fraction?",
      choices: ["1/2", "1/3", "2/3", "1/4"],
      answer: "1/2",
    },
  ],

  math2: [
    {
      question: "What is 7²?",
      choices: ["49", "42", "56", "63"],
      answer: "49",
    },
    {
      question: "Solve: 64 ÷ 8",
      choices: ["6", "8", "9", "7"],
      answer: "8",
    },
    {
      question: "What is the cube of 3?",
      choices: ["9", "27", "18", "36"],
      answer: "27",
    },
    {
      question: "What is 10% of 300?",
      choices: ["20", "25", "30", "35"],
      answer: "30",
    },
    {
      question: "What is the perimeter of a square with side 6?",
      choices: ["24", "18", "12", "36"],
      answer: "24",
    },
    {
      question: "What is the median of 3, 5, 7?",
      choices: ["3", "5", "7", "6"],
      answer: "5",
    },
    {
      question: "Solve: 3 + 6 x 2",
      choices: ["18", "12", "15", "21"],
      answer: "15",
    },
    {
      question: "What is the next prime number after 7?",
      choices: ["9", "10", "11", "13"],
      answer: "11",
    },
    {
      question: "How many degrees in a right angle?",
      choices: ["45", "60", "90", "180"],
      answer: "90",
    },
    {
      question: "What is ¼ of 100?",
      choices: ["20", "25", "30", "40"],
      answer: "25",
    },
  ],
};


let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timerCount = 0;
let timerInterval;

const questionEl = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const statusText = document.getElementById("status");
const nextBtn = document.getElementById("nextBtn");
const resultText = document.getElementById("result");
const timerEl = document.getElementById("timer");
const progressText = document.getElementById("progressText");

function showPage(pageClass) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.querySelector(`.${pageClass}`).classList.remove('hidden');
}

function startQuiz(subject) {
  currentQuiz = quizzes[subject];
  currentQuestionIndex = 0;
  score = 0;
  timerCount = 0;

  // update title
  const subjectTitle = {
    math1: "Mathematics 1",
    math2: "Mathematics 2",
    science1: "Science 1",
    science2: "Science 2",
  };
  document.querySelector(".quiz-header h2").textContent = `${subjectTitle[subject]} Quiz`;

  showPage('quiz-page');
  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerCount++;
    timerEl.textContent = `Time: ${timerCount}s`;
  }, 1000);
}

function showQuestion() {
  const current = currentQuiz[currentQuestionIndex];
  questionEl.textContent = current.question;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
  choicesContainer.innerHTML = "";
  statusText.textContent = "";

  current.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice");
    btn.onclick = () => selectAnswer(btn, current.answer);
    choicesContainer.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const buttons = choicesContainer.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else if (btn === button) {
      btn.classList.add("wrong");
    }
  });

  if (button.textContent === correctAnswer) {
    score++;
    statusText.textContent = "Correct!";
  } else {
    statusText.textContent = `Wrong! Correct answer: ${correctAnswer}`;
  }
}

nextBtn.addEventListener("click", () => {
  const anyAnswered = Array.from(choicesContainer.children).some(btn => btn.disabled);
  if (!anyAnswered) {
    statusText.textContent = "Please select an answer before proceeding.";
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  clearInterval(timerInterval);
  
  // Calculate percentage
  const totalQuestions = currentQuiz.length;
  const percentage = (score / totalQuestions) * 100;
  
  // Determine Grade
  let grade = "";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "F";
  
  // Update Score Page
  document.getElementById("result").textContent = `You scored ${score} out of ${totalQuestions} in ${timerCount} seconds.`;
  document.querySelector(".grade").textContent = grade;
  document.querySelector(".percentage").textContent = `${Math.round(percentage)}% Correct`;

  // Show Score Page
  showPage('score-page');
}

// Subject card click to start quiz
document.querySelectorAll('.subject-card').forEach(card => {
  card.addEventListener('click', function (e) {
    e.preventDefault();
    const subject = this.getAttribute('data-subject');
    startQuiz(subject);
  });
});

// Try again button
document.querySelector('.try-again-btn').addEventListener('click', (e) => {
  e.preventDefault();
  showPage('welcome-page');
});

// Show welcome page on initial load
showPage('welcome-page');