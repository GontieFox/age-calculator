// Input and span value
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const button = document.querySelector('#confirm-btn');

const daySpan = document.querySelector('#day-span');
const monthSpan = document.querySelector('#month-span');
const yearSpan = document.querySelector('#year-span');

// Function to calculate and show age
function calculateAge() {
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