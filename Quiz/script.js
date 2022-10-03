const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'The lakers have how many championships?',
        answers: [
            { text: '17', correct: true },
            { text: '18', correct: false }
        ]
    },
    {
        question: 'Who is "Not" a former Laker?',
        answers: [
            { text: 'Magic Johnson', correct: false },
            { text: 'Michael Jordan', correct: true },
            { text: 'Nick Van Exel', correct: false },
            { text: 'Kobe Bryant', correct: false }
        ]
    },
    {
        question: 'Has the Lakers always been in Los Angeles?',
        answers: [
            { text: 'Kinda', correct: false },
            { text: 'YES!!!', correct: false },
            { text: 'Um no', correct: true },
            { text: 'IDK', correct: false }
        ]
    },
    {
        question: 'Which Kobe jersey has the most championships?',
        answers: [
            { text: '24', correct: false },
            { text: '8', correct: true }
        ]
    }

]
