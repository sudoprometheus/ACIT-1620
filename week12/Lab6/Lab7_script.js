// Please complete the following two tasks and submit a github link for the webpage

// Task 1:
// You are building a simple Interactive Color Picker app where users can:
// Click on a color button to change the color of a box
// Add a new color to the palette using an input field
// To get started, use JavaScript DOM methods to access the following HTML elements:
// Create 4 variables/constants to implement the following
// The div that displays the current color (id="colorBox")
// The container that holds all the color buttons (id="colorButtons")
// The form where users can submit a new color (id="addColorForm")
// The input field where the user types a new color (id="colorInput")

// Task 1 code goes here
let current_color = document.getElementById("colorBox");
let btn_container = document.getElementById("colorButtons");
let form_color = document.getElementById("addColorForm");
let input_color = document.getElementById("colorInput");

// Task 2: Change color when a button is clicked

// You want users to be able to click on a color button to change the background 
// color of a display box (colorBox). 
// Each color button has the class "color-btn".
// Write a JavaScript event listener that does the following when a button 
// inside the colorButtons container is clicked:
// (1) Checks if the clicked element has the class "color-btn"
// (2) Gets the backgroundColor style of that button
// (3) Updates the colorBox's background to that color
// (4) Displays the name or hex code of the color as text inside the colorBox
// Hint: Use addEventListener on the color buttons container, and access 
// the clicked element with event.target.


// Task 2 code goes here

btn_container.addEventListener("click", function (event) {
  if (event.target.classList.contains("color-btn")) {
    let selectedColor = event.target.style.backgroundColor; 
    current_color.style.backgroundColor = selectedColor; 
    current_color.textContent = selectedColor;
  }
});

// Please do not change the existing code
// Add new color button
addColorForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newColor = colorInput.value.trim();
  if (!newColor) return;

  // Create a new button
  const newBtn = document.createElement('button');
  newBtn.className = 'color-btn';
  newBtn.style.backgroundColor = newColor;

  // Optional: set a fallback text color name
  newBtn.title = newColor;

  colorButtons.appendChild(newBtn);
  colorInput.value = '';
});
