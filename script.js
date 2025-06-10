let display = document.getElementById('display');
let history = [];
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        const result = eval(display.value);
        addToHistory(display.value, result);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}
function addToHistory(expression, result) {
    const entry = `${expression} = ${result}`;
    history.push(entry);
    updateHistory();
}
function updateHistory() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';
    history.slice().reverse().forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        e.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});