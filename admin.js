document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch User Data:
    fetch('/users') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(users => {
            const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
            users.forEach(user => {
                const row = userTable.insertRow();
                // ... (Add cells to the row with user data)
            });
        });

    // 2. Fetch Entry Data (Similar to user data):
    fetch('/entries')
        .then(response => response.json())
        .then(entries => {
            const entryTable = document.getElementById('entry-table').getElementsByTagName('tbody')[0];
            entries.forEach(entry => {
                const row = entryTable.insertRow();
                // ... (Add cells to the row with entry data)
            });
        });

    // 3. Fetch Giveaway Settings:
    fetch('/settings')
        .then(response => response.json())
        .then(settings => {
            document.getElementById('giveaway-amount').value = settings.amount;
        });

    // 4. Handle Settings Form Submission:
    document.getElementById('settings-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const amount = document.getElementById('giveaway-amount').value;

        fetch('/settings/update', {  // Replace with your API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount })
        })
        .then(response => {
            if (response.ok) {
                alert("Settings updated!");
            } else {
                alert("Error updating settings.");
            }
        });
    });
});
