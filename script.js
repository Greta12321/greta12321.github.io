document.getElementById("contactForm").addEventListener("submit", function(event) {
    var age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age < 18) {
        event.preventDefault();
        alert("You must be 18 years or older to submit the form.");
    }
});


