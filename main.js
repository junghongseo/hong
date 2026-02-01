// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Donation Logic
const donationButtons = document.querySelectorAll('.donation-amount');
const customAmountInput = document.getElementById('custom-amount');
const donateBtn = document.getElementById('donate-btn');
const progress = document.getElementById('progress');
const currentAmountSpan = document.getElementById('current-amount');

const goalAmount = 10000;
let currentAmount = 0;

function updateDonationProgress() {
  const percentage = (currentAmount / goalAmount) * 100;
  progress.style.width = `${percentage}%`;
  currentAmountSpan.textContent = `$${currentAmount.toLocaleString()}`;
}

donationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const amount = parseInt(button.dataset.amount, 10);
    currentAmount += amount;
    updateDonationProgress();
  });
});

donateBtn.addEventListener('click', () => {
  const customAmount = parseInt(customAmountInput.value, 10);
  if (!isNaN(customAmount) && customAmount > 0) {
    currentAmount += customAmount;
    updateDonationProgress();
    customAmountInput.value = '';
  }
});

// Initialize
updateDonationProgress();