const questions = [
  {
    question: "Which translator translates one line at a time? ",
    options: ["(A)Interpreter", "(B) Translator", "(C) Simulator", "(D) None of these"],
    correct: 2,
  },
    {
    question: "Which of the following is a way to represent an algorithm? ",
    options: ["(A) Pseudocode", "(B) flowchart", "(C) None of these", "(D) Both (A) & (B)"],
    correct: 3,
  },
  
  {
    question: "Yeh kiska image hai?",
    image: "tajmahal.png", // Image path
    options: ["Taj Mahal", "Qutub Minar", "Eiffel Tower", "Great Wall of China"],
    correct: 0,
  },
  {
    question: "What is the instrument played in this music?",
    audio: "Piano-instrument.mp3", // Audio file path
    options: ["Piano", "Guitar", "Drums", "Violin"],
    correct: 0,
  },
  {
    question: "Which bird is singing in this music?",
    audio: "cuckoo.mp3", // Audio file path
    options: ["Peacock", "Cuckoo", "Pigeon", "Ostrich"],
    correct: 1,
  },
  {
    question: "Rainbow mein kitne colors hote hain?",
    options: ["5", "6", "7", "8"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let selectedAnswers = []; // Store selected answers
let isReviewMode = false; // Track if review mode is active
let currentAudio; // To handle audio playback

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option label");
const optionContainers = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const scoreEl = document.getElementById("score");
const answerFeedbackEl = document.getElementById("answer-feedback");
const timerEl = document.getElementById("timer");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Stop previous audio if any
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Update question text and image/audio
  questionEl.innerHTML = currentQuestion.image
    ? `<img src="${currentQuestion.image}" style="width: 70%;" alt="Question Image"><p>${currentQuestion.question}</p>`
    : currentQuestion.audio
    ? `<p>${currentQuestion.question}</p>`
    : currentQuestion.question;

  if (currentQuestion.audio) {
    currentAudio = new Audio(currentQuestion.audio);
    currentAudio.controls = true;
    currentAudio.play();
    questionEl.appendChild(currentAudio);
  }

  // Load options
  currentQuestion.options.forEach((option, index) => {
    optionsEl[index].textContent = option;
    optionContainers[index].classList.remove("selected", "wrong");

    // Highlight previously selected option if in review mode
    if (selectedAnswers[currentQuestionIndex] === index) {
      optionContainers[index].classList.add("selected");
      document.getElementById(`option${index}`).checked = true;

      // Disable options in review mode
      document.getElementById(`option${index}`).disabled = isReviewMode;
    } else {
      document.getElementById(`option${index}`).checked = false;
      document.getElementById(`option${index}`).disabled = isReviewMode;
    }
  });

  // Clear feedback and timer
  answerFeedbackEl.textContent = "";
  timerEl.textContent = "";
  clearInterval(timerInterval);
}

// Handle Option Selection
optionContainers.forEach((optionContainer, index) => {
  optionContainer.addEventListener("click", () => {
    if (isReviewMode) return;

    // Deselect other options
    optionContainers.forEach((opt) => opt.classList.remove("selected"));

    // Select clicked option
    optionContainer.classList.add("selected");

    // Mark radio button as checked
    document.getElementById(`option${index}`).checked = true;

    // Save selected answer
    selectedAnswers[currentQuestionIndex] = index;

    // Enable Next button
    nextBtn.disabled = false;
  });
});


// Handle Next Button
nextBtn.addEventListener("click", () => {
  if (isReviewMode) {
    isReviewMode = false;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
    return;
  }

  const selectedOption = selectedAnswers[currentQuestionIndex];

  if (selectedOption === undefined) {
    alert("Please select an answer!");
    return;
  }

  // Check if answer is correct
  if (selectedOption === questions[currentQuestionIndex].correct) {
    score += 2;
    answerFeedbackEl.textContent = "Correct!";
    answerFeedbackEl.style.color = "green";
  } else {
    answerFeedbackEl.textContent = "Wrong answer!";
    answerFeedbackEl.style.color = "red";
    optionContainers[selectedOption].classList.add("wrong");
  }

  // Highlight correct option
  optionContainers[questions[currentQuestionIndex].correct].classList.add("selected");

  scoreEl.textContent = `Score: ${score}`;
  startTimer();
});

// Handle Back Button
backBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    isReviewMode = true;
    loadQuestion();
    nextBtn.disabled = false;
    answerFeedbackEl.textContent = "Answer locked! You can't change it.";
  }
});

// Timer for Next Question
function startTimer() {
  let timeLeft = 3;
  timerEl.textContent = `Next question in: ${timeLeft} seconds`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Next question in: ${timeLeft} seconds`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "";
      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    }
  }, 1000);
}

// Show Results
function showResults() {
  // Clear any previous feedback
  answerFeedbackEl.textContent = "";  // Clear feedback
  answerFeedbackEl.classList.remove("correct", "wrong");  // Remove any color classes

  // Display completion message
  questionEl.innerHTML = `<h2>Quiz Completed!</h2>`;

  // Display results in a well-structured UI
  document.getElementById("answer-box").innerHTML = `
    <div id="result-container">
      <h2>Congratulations!</h2>
      <p>Your final score is: <strong>${score}</strong></p>
      <p>You answered ${score / 2} questions correctly out of ${
    questions.length
  }.</p>
      <button id="restart-btn">Restart Quiz</button>
    </div>
  `;
  


  // Hide navigation buttons
  nextBtn.style.display = "none";
  backBtn.style.display = "none";
  timerEl.textContent = ""; // Clear timer

  // Add event listener for restart button
  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
}

// Restart Quiz
function restartQuiz() {
  window.location.href = "index.html";
}

// Initial Load
loadQuestion();
