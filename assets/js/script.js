document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit")
            } else {
                gameType = this.getAttribute("data-type")
                alert(`You clicked ${gameType}`)
            }
        
        })
    }
})

function runGame() {}

function checkAnswe() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractionQuestion() {}

function displayMultiplicationQuestion() {}


