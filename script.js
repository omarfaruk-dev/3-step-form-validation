let currentStep = 1;

    // Function to show the current step and hide others
    function showStep(step) {
      document.querySelectorAll('.step').forEach((stepElement) => {
        stepElement.classList.remove('active');
      });
      document.getElementById(`step${step}`).classList.add('active');
    }

    // Function to go to the next step
    function nextStep(step) {
      if (validateStep(currentStep)) {
        currentStep = step;
        showStep(currentStep);
      }
    }

    // Function to go to the previous step
    function prevStep(step) {
      currentStep = step;
      showStep(currentStep);
    }

    // Function to validate the current step
    function validateStep(step) {
      let isValid = true;
      const stepElement = document.getElementById(`step${step}`);
      const inputs = stepElement.querySelectorAll('input');

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false;
          input.classList.add('border-red-500');
        } else {
          input.classList.remove('border-red-500');
        }
      });

      return isValid;
    }

    // Handle form submission
    document.getElementById('multiStepForm').addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateStep(currentStep)) {
        alert('Form submitted successfully!');
        // You can add your form submission logic here
      }
    });

    // Initialize the form by showing the first step
    showStep(currentStep);

    // Navbar Hamburger Menu Toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('active');
    });