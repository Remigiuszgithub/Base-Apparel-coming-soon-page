function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    const iconError = document.getElementById('iconError');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please provide a valid email';
      emailInput.style.border = '1px solid var(--soft-red)';
      emailInput.style.background = 'white';
      iconError.style.display = 'block';
      emailInput.focus();
    } else {
      emailError.textContent = 'The email address is correct';
      emailInput.style.border = '1px solid lightgray';
      emailInput.style.background = 'white';
      iconError.style.display = 'none';
    }
  }
  