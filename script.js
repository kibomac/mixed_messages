// Arrays for different categories
const messages = {
  motivational: [
      "Keep pushing forward!",
      "Believe in yourself and all that you are.",
      "You are stronger than you think.",
      "Every day is a new opportunity.",
      "Mistakes are proof that you are trying.",
      "Stay positive, work hard, make it happen."
  ],
  funny: [
      "Why don’t scientists trust atoms? Because they make up everything!",
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "I would tell you a construction pun, but I’m still working on it."
  ],
  inspirational: [
      "The only way to do great work is to love what you do.",
      "Don’t watch the clock; do what it does. Keep going.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Act as if what you do makes a difference. It does."
  ]
};

// Function to generate a random message
function generateRandomMessage(category) {
  const selectedMessages = messages[category];
  const randomIndex = Math.floor(Math.random() * selectedMessages.length);
  return selectedMessages[randomIndex];
}

// Get elements from the DOM
const generateBtn = document.getElementById('generate-btn');
const messageBox = document.getElementById('message-box');

// Event listener to generate a random message
generateBtn.addEventListener('click', () => {
  const category = document.getElementById('category-select').value;
  const message = generateRandomMessage(category);
  messageBox.textContent = message;
});

// JavaScript to handle social media sharing
document.getElementById('share-twitter').addEventListener('click', () => {
  const message = messageBox.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  window.open(twitterUrl, '_blank');
});

