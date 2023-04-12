// Input and span value
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const button = document.querySelector('#confirm-btn');

const daySpan = document.querySelector('#day-span');
const monthSpan = document.querySelector('#month-span');
const yearSpan = document.querySelector('#year-span');

const dayError = document.querySelector('#day-error');
const monthError = document.querySelector('#month-error');
const yearError = document.querySelector('#year-error');

// Validate inputs
function validateInput() {
    let isValid = true;
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if (isNaN(day) || day < 1 || day > 31) {
        dayError.style.display = "block"
        isValid = false;
    } else {
        dayError.style.display = "none";
    }

    if (isNaN(month) || month < 1 || month > 12) {
        monthError.style.display = "block"
        isValid = false;
    } else {
        monthError.style.display = "none"
    }

    if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        yearError.style.display = "block"
        isValid = false;
    } else {
        yearError.style.display = "none"
    }

    return isValid;
}

// Calculate and show age
function calculateAge() {
    if (!validateInput()) {
        return;
    }

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const birthday = new Date(year, month - 1, day);

    const now = new Date();
    const diff = now.getTime() - birthday.getTime();

    const age = new Date(diff);
    const years = age.getUTCFullYear() - 1970;
    const months = age.getUTCMonth();
    const days = age.getUTCDate() - 1;

    daySpan.textContent = days;
    monthSpan.textContent = months;
    yearSpan.textContent = years;
}

// Function call
button.addEventListener('click', calculateAge);