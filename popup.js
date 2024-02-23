document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', function () {
    getInputValue();
  });
});

const getInputValue = () => {
  const outputElement = document.getElementById('output');
  const duckImage = document.getElementById('duckImage');
  duckImage.style.display = 'block';
  outputElement.style.display = 'none'
  duckImage.addEventListener('animationend', function () {
    duckImage.style.display = 'none';
  });

  setTimeout(() => {
    outputElement.textContent = 'Quack Quack Quack Quack';
    outputElement.style.display = 'block'
  }, 3000)
}