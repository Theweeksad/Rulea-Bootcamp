const form = document.getElementById("form__list");

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const isCorrect = event.target.query1.value === '1';
  sessionStorage.setItem('question1', isCorrect);

  window.location.href="./quetion-two.html"
});
