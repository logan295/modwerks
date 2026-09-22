const intakeForm = document.querySelector('[data-intake]');

if (intakeForm) {
  const steps = ['vehicle', 'contact', 'review'];
  const progress = [...document.querySelectorAll('[data-progress]')];
  const email = intakeForm.elements.email;
  let currentStep = 'vehicle';

  function checkEmail() {
    const value = email.value.trim();
    const complete = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    email.setCustomValidity(value && !complete ? 'Enter a complete email address.' : '');
  }

  function showStep(step) {
    currentStep = step;
    intakeForm.querySelectorAll('[data-step]').forEach((section) => {
      section.hidden = section.dataset.step !== step;
    });
    progress.forEach((item) => {
      const itemIndex = steps.indexOf(item.dataset.progress);
      const currentIndex = steps.indexOf(step);
      item.classList.toggle('is-active', itemIndex === currentIndex);
      item.classList.toggle('is-complete', itemIndex < currentIndex);
      if (itemIndex === currentIndex) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    intakeForm.querySelector(`[data-step="${step}"] h2`)?.focus();
  }

  function validateStep(step) {
    if (step === 'contact') checkEmail();
    const section = intakeForm.querySelector(`[data-step="${step}"]`);
    const invalid = [...section.querySelectorAll('input, select, textarea')].find((field) => !field.checkValidity());
    if (invalid) {
      invalid.reportValidity();
      invalid.focus();
      return false;
    }
    return true;
  }

  function buildSummary() {
    const labels = {
      year: 'Year', make: 'Make', model: 'Model',
      requestType: 'Type of work', startDate: 'Ideal start date',
      estimatedStay: 'Estimated stay', notes: 'Details',
      name: 'Name', email: 'Email', phone: 'Phone',
    };
    const summary = intakeForm.querySelector('[data-summary]');
    summary.replaceChildren();
    for (const [name, label] of Object.entries(labels)) {
      const value = intakeForm.elements[name]?.value.trim();
      if (!value) continue;
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value;
      row.append(term, detail);
      summary.append(row);
    }
  }

  email.addEventListener('blur', checkEmail);
  email.addEventListener('input', () => email.setCustomValidity(''));
  intakeForm.querySelector('[data-next]').addEventListener('click', () => {
    if (validateStep('vehicle')) showStep('contact');
  });
  intakeForm.querySelector('[data-review]').addEventListener('click', () => {
    if (validateStep('contact')) {
      buildSummary();
      showStep('review');
    }
  });
  intakeForm.querySelectorAll('[data-back]').forEach((button) => {
    button.addEventListener('click', () => showStep(button.dataset.back));
  });
  intakeForm.addEventListener('submit', (event) => event.preventDefault());
  intakeForm.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.target.tagName !== 'INPUT' || event.target.type === 'date') return;
    event.preventDefault();
    if (currentStep === 'vehicle') intakeForm.querySelector('[data-next]').click();
    if (currentStep === 'contact') intakeForm.querySelector('[data-review]').click();
  });
}
