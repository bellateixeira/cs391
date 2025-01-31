function addition() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) + Number(second);
    updateOutput(result);
}

function subtraction() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) - Number(second);
    updateOutput(result);
}

function multiplication() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) * Number(second);
    updateOutput(result);
}

function division() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) / Number(second);
    updateOutput(result);
}

function power() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    let result = 1;
    for (let i = 1; i <= second; i++) {
        result = first * result;
    }

    updateOutput(result);
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

function updateOutput(result) {
    let outputElement = document.getElementById("output"); // get output element
    outputElement.innerHTML = result; // display the result

    // if result is negative, change text color to red, else reset styling
    if (result < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
}