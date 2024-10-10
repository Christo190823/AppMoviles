

//despliega lo señalado en el display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
//elimina los elementos del display
function claerDisplay() {
    document.getElementById('display').value = '';
}
//Borra solo un digito del display
function deleteLast(value) {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
//Comenta errores y hace las operacioness indicadas
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Expersión inválida');
    }
}