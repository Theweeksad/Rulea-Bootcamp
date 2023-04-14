const result1 = sessionStorage.getItem('question1');
const result2 = sessionStorage.getItem('question2');
const result3 = sessionStorage.getItem('question3');

const questionElement1 = document.getElementById('resultOne');
const questionElement2 = document.getElementById('resultTwo');
const questionElement3 = document.getElementById('resultThree');

function validation(result, element) {
    if(result === 'true') {
        element.classList.add('correctAnswer', 'imag__correct')
    } else {
        element.classList.add('incorrectAnswer', 'imag__incorrect')
    }
}

validation(result1, questionElement1);
validation(result2, questionElement2);
validation(result3, questionElement3);
