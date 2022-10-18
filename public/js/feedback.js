
const newFormHandler = async (event) => {
    console.log('hi');
    event.preventDefault();
  
    const email = document.querySelector('#feedbackEmail').value.trim();
    const feedback = document.querySelector('#feedbackInput').value.trim();
  console.log(email, feedback);
    if (email && feedback) {
        await fetch(`/api/feedback`, {
        method: 'POST',
        body: JSON.stringify({ email, feedback }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to create project');
    //   }
    }
  };



  document
  .querySelector('.feedbackForm')
  .addEventListener('submit', newFormHandler);