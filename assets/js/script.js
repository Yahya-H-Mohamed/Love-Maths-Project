document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer()
            } else {
                gameType = this.getAttribute("data-type")
                runGame(gameType)
            }
        
        })
    }

    document.getElementById("answer-box").addEventListener("keydown"), function(event) {
        if (event.key === "Enter") {
            checkAnswer()
        }
    }

    runGame("addition")
})

/**
 * The main game "loop, called when the script is first loaded
 * and after the user's answer has been processed"
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = ""
    document.getElementById("answer-box").focus()

    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else if (gameType === "subtraction") {
        displaySubtractionQuestion(num1, num2)
    }  else if (gameType === "multiplication") {
        displayMultiplicationQuestion(num1, num2)
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2)
    } else {
        alert(`Unknown Game Type: ${gametype}`)
        throw `Unknown Game Type: ${gametype}. Aborting!`
    }
}

/**Checks the answer against the firsy element in the returned 
 * calculateCorrectAnswer array */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value)
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect){
        alert("Hey you got it right!")
        incrementScore()
    } else {
        alert(`Oh No! You answered ${userAnswer} but the correct answer was ${calculatedAnswer[0]}`)
        incrementWrongAnswer()
    }

    runGame(calculatedAnswer[1])
}

/**Gets the operand and the operator directly from the dom
 * and returns the corrent answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = document.getElementById("operator").innerText

    if (operator === "+"){
        return [operand1 + operand2, "addition"]
    } else if (operator === "-"){
        return [operand1 - operand2, "subtraction"]
    } else if (operator === "x"){
        return [operand1 * operand2, "multiplication"]
    } else if (operator === "/"){
        return [operand1 / operand2, "division"]
    } else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Aborting`
    }
}

/**Gets the current score from the DOM and
 * implements it by 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore
}

/**Gets the current incorrect score from the DOM and
 * implements it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore
}


function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "+"
}

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1
    document.getElementById("operator").textContent = "-"
}

function displayMultiplicationQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "x"
}

function displayDivisionQuestion(operand1, operand2) {
    operand1 = operand1 * operand2
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1
    document.getElementById("operator").textContent = "/"
}


