// Array of random messages
const messages = [
  "Keep pushing forward!",
  "Believe in yourself and all that you are.",
  "You are stronger than you think.",
  "Every day is a new opportunity.",
  "Mistakes are proof that you are trying.",
  "Stay positive, work hard, make it happen.",
  "Your only limit is your mind.",
  "Success is not for the lazy.",
  "Dream it. Wish it. Do it.",
  "Focus on the good.",
  "Make today amazing!",
];

// Function to generate a random message
function generateRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Get the button and message box elements
const generateBtn = document.getElementById("generate-btn");
const messageBox = document.getElementById("message-box");

// Add an event listener to the button to generate a message when clicked
generateBtn.addEventListener("click", () => {
  const message = generateRandomMessage();
  messageBox.textContent = message;
});
