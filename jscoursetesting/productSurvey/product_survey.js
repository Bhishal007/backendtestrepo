function submitFeedback() {
    // Accessing all input values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    // Task: Accessing the new Experience details
    const experience = document.getElementById('userExperience').value;

    alert('Thank you for your valuable feedback');

    // Displaying the details in the result section
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    
    // Task: Showing the experience result
    document.getElementById('displayExperience').innerText = experience;

    // Make the info section visible
    document.getElementById('userInfo').style.display = 'block';
}

// Attach the function to the button click
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Allow "Enter" key to submit
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});