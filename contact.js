document.addEventListener('DOMContentLoaded', () => {

    const companyName = document.getElementById('companyName');
    const email = document.getElementById('email');
    const companyAddress = document.getElementById('companyAddress');
    const message = document.getElementById('message');
    const submitButton = document.getElementById('submitButton');

    function checkFormValidity() {
      if (companyName.value.trim() !== '' &&
          email.value.trim() !== '' &&
          companyAddress.value.trim() !== '' &&
          message.value.trim() !== '') {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }

    companyName.addEventListener('input', checkFormValidity);
    email.addEventListener('input', checkFormValidity);
    companyAddress.addEventListener('input', checkFormValidity);
    message.addEventListener('input', checkFormValidity);

    submitButton.addEventListener('click', () => {
      if (!submitButton.disabled) {
        alert('Form submitted!');
  
    
        companyName.value = '';
        email.value = '';
        companyAddress.value = '';
        message.value = '';
  
     
        submitButton.disabled = true;
      }
    });
  });
  