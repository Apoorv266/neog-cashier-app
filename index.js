var notes = [2000, 500, 100, 20, 10, 5, 1]
var billInput = document.querySelector("#billInput")
var nextBtn = document.querySelector("#nextBtn")
var cashBox = document.querySelector('.thirdBox')
var noteQuantity = document.querySelectorAll('.notesChange')
var tableBox = document.querySelector('.fourthBox')
var submitBtn = document.querySelector('#submitBtn')
var errorMessage = document.querySelector('#error')
var cashItem = document.querySelector('#cashInput')
var resetBtn = document.querySelector("#reset")


function billValFunc() {
    if (billInput.value > 0 || cashItem.value) {
        cashBox.style.display = 'block';
        tableBox.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        error("Please input a valid Positive Amount");
        cashBox.style.display = 'none';
        tableBox.style.display = 'none';
    }
}

function cashValFunc() {
    if (Number(cashItem.value) >= Number(billInput.value)) {
        errorMessage.style.display = 'none';
        tableBox.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
        error("Please input valid Cash Amount. Cash Amount should be greater than Bill Amount.");
        tableBox.style.display = 'none';
    }
    NotesNoFunc()
}

function NotesNoFunc() {
    var amountToBeReturned = cashItem.value - billInput.value;
    for (let i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(amountToBeReturned / notes[i]);
        amountToBeReturned = amountToBeReturned % notes[i];
        noteQuantity[i].innerText = noOfNotes;
    };

};

function resetFunc() {
    cashBox.style.display = 'none';
    tableBox.style.display = 'none';
    billInput.value = ""
}

function error(message) {
    errorMessage.innerText = message;
};


nextBtn.addEventListener("click", billValFunc);
submitBtn.addEventListener("click", cashValFunc);
resetBtn.addEventListener("click", resetFunc)

