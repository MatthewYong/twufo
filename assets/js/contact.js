//Function to send message from contact form to emailaddress. Code used from emailjs.com "template-code-sample"
function sendEmail(Form) {
    var template_params = {
            "first_name": Form.fname.value,
            "last_name": Form.lname.value,
            "email_address": Form.email.value,
            "message": Form.message.value,  
        };

    var service_id = "gmail";
    var template_id = "twufo";
    emailjs.send(service_id, template_id, template_params)
     .then(function(response) {
         alert("Message Sent!", response)
    }, function(error) {
        alert("Failed", error)
    });
    return false
};

