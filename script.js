document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch Giveaway Info (if needed):
    fetch('/giveaway-info') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(info => {
            // Display giveaway information on the page
            document.getElementById('giveaway-info').innerHTML = Giveaway Amount: ?${info.amount};
        });

    // 2. Handle Registration Form Submission:
    document.getElementById('registration-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const upiId = document.getElementById('upi-id').value;
        const phone = document.getElementById('phone').value;

        fetch('/register', { // Replace with your API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ upiId, phone })
        })
        .then(response => {
            if (response.ok) {
                alert("Registration successful!");
                // Optionally redirect or update the UI
            } else {
                alert("Registration failed. Please try again.");
            }
        });
    });
});
