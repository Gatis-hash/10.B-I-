function calculate() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');
    
    if (isNaN(operand1) || isNaN(operand2)) {
        resultElement.textContent = "Kļūda: Ievadiet derīgus skaitļus!";
        return;
    }
    
    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                resultElement.textContent = "Kļūda: Dalīšana ar nulli!";
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            resultElement.textContent = "Nepareizs operators!";
            return;
    }
    
    resultElement.textContent = `Rezultāts: ${result}`;
}