


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function claerDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast(value) {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Expersión inválida');
    }
}