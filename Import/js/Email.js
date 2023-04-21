function sendmail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_mlrl429", "template_386b1yh", params).then(function(res) {
        alert("Success! " + res.status);
    })
}



// Lenke til vidieo: https://www.youtube.com/watch?v=5EZsRnJpUNU
//https://dashboard.emailjs.com/admin/templates