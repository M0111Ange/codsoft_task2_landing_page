document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");
    
    if(email.trim() === "") {
        message.innerText = "Please enter your email.";
    } else {
        message.innerText = "Thank you for signing up!";
        // Here you can add further processing like sending data to server etc.
    }
});
