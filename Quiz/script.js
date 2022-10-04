const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    })
}

function resetState() {
    clearStatusClass(documentt.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        playButton.innerText = 'Restart'
        playButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
