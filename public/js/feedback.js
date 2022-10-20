const newFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#feedbackEmail').value.trim();
    const feedback = document.querySelector('#feedbackInput').value.trim();

  console.log(email, feedback);
    if (email && feedback) {
        await fetch(`/feedback`, {
        method: 'POST',
        body: JSON.stringify({ email, feedback }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  };

  document
  .querySelector('.feedbackForm')
  .addEventListener('submit', newFormHandler);