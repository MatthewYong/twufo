//Function to send message from contact form to emailaddress. Code used from CI course 'sending an email with emailjs'
$("#send-button").on("click", function() {
    $("#send-button").submit(function() {
        var template_params = {
            "first_name": "last_name_value",
            "last_name": "last_name_value",
            "email_address": "email_address_value",
            "message": "message_value"
        };
        var service_id = "default_service";
        var template_id = "twufo";
        emailjs.send(service_id, template_id, template_params);
        console.log("test");
    });
});
