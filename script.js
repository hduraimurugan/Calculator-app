const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');

    // Function to append value to the display
    function appendToDisplay(value) {
        display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = '';
    }

    // Function to calculate the result
    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }

    // Function to handle key presses
    function handleKeyPress(event) {
        const key = event.key;
        if ((key >= '0' && key <= '9') || key === '.') {
            appendToDisplay(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            appendToDisplay(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            clearDisplay();
        }
    }

    // Add event listener for key presses
    document.addEventListener('keydown', handleKeyPress);

    // Expose functions to global scope for button clicks
    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});
