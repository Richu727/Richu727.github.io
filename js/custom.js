// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const data = {
        name: name,
        email: email,
        phone: phone
    };

    fetch('https://script.google.com/macros/s/AKfycbyQlcYHAB6Rk7KkXBtJeJHIgghhc33BbzbsXp236Je43OuMLwfEXE1cSsL3o8JSMjU/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Hide the form and show the success card
        document.getElementById('dataForm').style.display = 'none';
        document.getElementById('successCard').style.display = 'flex';
    })
    .catch(error => {
        document.getElementById('status').textContent = 'Request failed: ' + error.message;
    });
});