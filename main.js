// Java Script 

// Event Listener

document.getElementById('btn').addEventListener('click', calctotal);

// Function

function calctotal () {
    //input
    let Fahrenheit = Number(document.getElementById('input').value);

    //calculations
    let total =(Fahrenheit - 32) * 5 / 9;

    //output
document.getElementById('output').innerHTML = total;
}

