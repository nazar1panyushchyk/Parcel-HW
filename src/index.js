document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const formData = {
        name: document.querySelector('name').value,
        email: document.querySelector('email').value,
        message: document.querySelector('message').value
    }

    console.log(formData);
})