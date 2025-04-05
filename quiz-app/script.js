const quizData = [
  {
    question: 'What is my name?',
    answerA: 'Jakub',
    answerB: 'Bartek',
    answerC: 'Marek',
    answerD: 'Grzegorz',
    correct: 'A'
  },
  {
    question: 'What does a cat do at midnight?',
    answerA: 'Writes CSS',
    answerB: 'Plays Minecraft',
    answerC: 'Chases its own tail',
    answerD: 'Learns React',
    correct: 'C'
  },
  {
    question: 'Which animal has the most likes on TikTok?',
    answerA: 'Programmer dog',
    answerB: 'Influencer cat',
    answerC: 'DJ elephant',
    answerD: 'Pigeon in a hoodie',
    correct: 'B'
  },
  {
    question: 'How much JavaScript is needed to change a lightbulb?',
    answerA: '1',
    answerB: '0, the bulb changes itself',
    answerC: 'Depends on the framework',
    answerD: 'Is this a test?',
    correct: 'C'
  }
];

let currentQuestionIndex = 0;

function quizLoad() {
  const currentQuestion = quizData[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;

  const letters = ['a', 'b', 'c', 'd'];

  for (let i = 0; i < letters.length; i++) {
    const labelId = letters[i] + '_text';
    const answerKey = 'answer' + letters[i].toUpperCase();

    // Insert answers into labels
    document.getElementById(labelId).textContent = currentQuestion[answerKey];

    // Reset colors and selections
    document.getElementById(labelId).style.color = 'black';
    document.getElementById(letters[i]).checked = false;
  }

  // Hide feedback
  const feedback = document.getElementById('feedback');
  feedback.textContent = '';
  feedback.classList.remove('show');
  feedback.style.display = 'none';

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.textContent = 'Submit';
  submitBtn.disabled = false;
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', checkAnswer);

function checkAnswer() {
  const feedback = document.getElementById('feedback');
  feedback.style.display = 'block'; // show feedback

  const answers = document.querySelectorAll('input[name="answer"]');
  let selectedAnswer = undefined;

  answers.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = answer.id;
    }
  });

  if (selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctLetter = currentQuestion.correct.toLowerCase();
    const correctLabel = document.getElementById(correctLetter + '_text');
    const selectedLabel = document.getElementById(selectedAnswer + '_text');

    // Check if answer is correct
    if (selectedAnswer.toUpperCase() === currentQuestion.correct) {
      feedback.textContent = 'Correct answer!';
      feedback.style.color = 'green';
      correctLabel.style.color = 'green';
    } else {
      feedback.textContent = 'Wrong answer!';
      feedback.style.color = 'red';
      correctLabel.style.color = 'green';
      selectedLabel.style.color = 'red';
    }
  }
  
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      quizLoad();
    } else {
      // Quiz finished
      document.querySelector('.quiz-content').innerHTML = `
        <h1>🎉 Quiz complete!</h1>
        <p>You finished all questions!</p>
      `;

      // button "Restart"
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.textContent = 'Restart';
      submitBtn.onclick = () => location.reload();

      // Hide feedback
      const feedback = document.getElementById('feedback');
      feedback.style.display = 'none';
    }
  }, 1500); // Move to the next question after 1.5 seconds
}

quizLoad();