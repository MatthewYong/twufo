//Function to send message from contact form to emailaddress. Code used from emailjs.com
$("#send-button").on("click", function() {
    var template_params = {
        "first_name": contact-form.name.value,
        "last_name": "lname",
        "email_address": "email",
        "message": "message"
    };
    var service_id = "default_service";
    var template_id = "twufo";
    emailjs.send(service_id, template_id, template_params);
});
