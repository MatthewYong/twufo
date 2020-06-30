//Function to send message from contact form to emailaddress. Code used from emailjs.com "template-code-sample"
function sendEmail(messageForm) {
    var template_params = {
            "first_name": messageForm.fname.value,
            "last_name": messageForm.lname.value,
            "email_address": messageForm.email.value,
            "message": messageForm.message.value,  
        };

    var service_id = "gmail";
    var template_id = "twufo";
    emailjs.send(service_id, template_id, template_params)
     .then(function(response) {
         alert("Message Sent!", response)
    }, function(error) {
        alert("Failed", error)
    });
    messageForm.reset();
    return false;
};

