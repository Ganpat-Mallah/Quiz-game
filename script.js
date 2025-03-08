const questions = [

    [
  {
    "question": "Which function is used to open a file in Python?",
    "options": ["(A) open()", "(B) file()", "(C) fopen()", "(D) openfile()"],
    "correct": 0
  },
  {
    "question": "Which data type is not a sequence type?",
    "options": ["(A) list", "(B) tuple", "(C) dictionary", "(D) string"],
    "correct": 2
  },
  {
    "question": "How is a single-line comment written in Python?",
    "options": ["(A) //", "(B) #", "(C) /* */", "(D) <!-- -->"],
    "correct": 1
  },
  {
    "question": "Which keyword is used to return a value from a function?",
    "options": ["(A) return", "(B) yield", "(C) output", "(D) give"],
    "correct": 0
  },
  {
    "question": "Which method is used to add an element to a list in Python?",
    "options": ["(A) append()", "(B) add()", "(C) insert()", "(D) extend()"],
    "correct": 0
  },
  {
    "question": "Which operator checks for membership?",
    "options": ["(A) in", "(B) is", "(C) == ", "(D) !="],
    "correct": 0
  },
  {
    "question": "Which loop in Python is an entry-controlled loop?",
    "options": ["(A) for", "(B) while", "(C) do-while", "(D) Both A and B"],
    "correct": 3
  },
  {
    "question": "Which keyword is used to immediately terminate a loop?",
    "options": ["(A) continue", "(B) break", "(C) pass", "(D) exit"],
    "correct": 1
  },
  {
    "question": "Which method is used to get all keys from a dictionary?",
    "options": ["(A) keys()", "(B) getkeys()", "(C) allkeys()", "(D) get_all_keys()"],
    "correct": 0
  },
  {
    "question": "Which function returns the length of a string?",
    "options": ["(A) length()", "(B) len()", "(C) size()", "(D) count()"],
    "correct": 1
  },
  {
    "question": "What is the purpose of the '==' operator in Python?",
    "options": ["(A) Assignment", "(B) Comparison", "(C) Logical AND", "(D) Logical OR"],
    "correct": 1
  },
  {
    "question": "Which function is used to sort a list?",
    "options": ["(A) sort()", "(B) order()", "(C) arrange()", "(D) sorted()"],
    "correct": 0
  },
  {
    "question": "What is a tuple in Python?",
    "options": ["(A) Mutable list", "(B) Immutable list", "(C) Mutable set", "(D) Immutable set"],
    "correct": 1
  },
  {
    "question": "Which keyword is used to define a new class?",
    "options": ["(A) function", "(B) class", "(C) def", "(D) struct"],
    "correct": 1
  },
  {
    "question": "Which keyword is used to define a function in Python?",
    "options": ["(A) function", "(B) def", "(C) define", "(D) func"],
    "correct": 1
  },
  {
    "question": "Which module is used to generate random numbers?",
    "options": ["(A) math", "(B) random", "(C) numbers", "(D) randint"],
    "correct": 1
  },
  {
    "question": "Which mode is used to write into a file in Python?",
    "options": ["(A) 'r'", "(B) 'w'", "(C) 'a'", "(D) 'r+'"],
    "correct": 1
  },
  {
    "question": "Which function is used to take input from the user?",
    "options": ["(A) input()", "(B) get()", "(C) scan()", "(D) read()"],
    "correct": 0
  },
  {
    "question": "Which method removes the last element from a list?",
    "options": ["(A) remove()", "(B) delete()", "(C) pop()", "(D) discard()"],
    "correct": 2
  },
  {
    "question": "Which keyword is used to define an empty code block?",
    "options": ["(A) pass", "(B) skip", "(C) empty", "(D) null"],
    "correct": 0
  },
  {
    "question": "What is the use of the '//' operator in Python?",
    "options": ["(A) Addition", "(B) Subtraction", "(C) Multiplication", "(D) Floor division"],
    "correct": 3
  },
  {
    "question": "Which function converts a string to lowercase?",
    "options": ["(A) lower()", "(B) downcase()", "(C) tolower()", "(D) lowercase()"],
    "correct": 0
  },
  {
    "question": "What is a set in Python?",
    "options": ["(A) Ordered collection", "(B) Collection of unique elements", "(C) Collection of duplicate elements", "(D) Key-value pair collection"],
    "correct": 1
  },
  {
    "question": "Which keyword is used to define a new function?",
    "options": ["(A) def", "(B) function", "(C) define", "(D) fun"],
    "correct": 0
  },
  {
    "question": "What is the purpose of the 'and' operator in Python?",
    "options": ["(A) Bitwise AND", "(B) Logical AND", "(C) Arithmetic AND", "(D) None of these"],
    "correct": 1
  },
  {
    "question": "Which function is used to close a file in Python?",
    "options": ["(A) close()", "(B) end()", "(C) terminate()", "(D) stop()"],
    "correct": 0
  },
  {
    "question": "What is the purpose of the 'is' operator in Python?",
    "options": ["(A) Identity comparison", "(B) Equality check", "(C) Assignment", "(D) Logical NOT"],
    "correct": 0
  },
  {
    "question": "Which function is used to count the number of characters in a string?",
    "options": ["(A) count()", "(B) len()", "(C) size()", "(D) strlen()"],
    "correct": 1
  },
  {
    "question": "Which data type is not a sequence type in Python?",
    "options": ["(A) List", "(B) Tuple", "(C) Dictionary", "(D) String"],
    "correct": 2
  }


  
  /*{
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
  },*/
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
