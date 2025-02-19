// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();




document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const successCard = document.getElementById('successCard');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        fetch('https://script.google.com/macros/s/AKfycbyVYkfTrr4MisfFqI08-I7gXS0i1X572psGLqYqISBKU4cC_iwa0Uid_cmTlYpQsvQ/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: serializeForm(this)
        })
        .then(response => {
            if (response.ok) {
                form.style.display = 'none';
                successCard.style.display = 'flex';
            }
        })
        .catch(error => {
            document.getElementById('status').textContent = 
                'Request failed: ' + error.message;
        });
    });

    function serializeForm(form) {
        const inputs = form.querySelectorAll('input');
        let serialized = '';
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name !== undefined) {
                serialized += `${encodeURIComponent(inputs[i].name)}=${encodeURIComponent(
                    inputs[i].value
                )}&`;
            }
        }
        return serialized.slice(0, -1);
    }
});