const form = document.getElementById("form__list");

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const isCorrect = event.target.query3.value === '2';
  sessionStorage.setItem('question3', isCorrect);

  window.location.href="./Last-card.html"
});
