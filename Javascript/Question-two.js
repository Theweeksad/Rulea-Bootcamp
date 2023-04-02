const form = document.getElementById("form__list");

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const elements = event.target.elements.namedItem('query2');

  const isCorrect = elements[1].checked && elements[2].checked && !elements[0].checked;

  sessionStorage.setItem('question2', isCorrect);
  window.location.href="./question_three.html"
});
