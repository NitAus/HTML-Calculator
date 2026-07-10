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

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const themeBtn = document.getElementById("themeBtn");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "Dark Mode";
  } else {
    themeBtn.textContent = "Light Mode";
  }
}
