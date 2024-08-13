// Contact Form Submission Handler
$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name && email && message) {
            alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
            // Reset form fields
            $('#contact-form')[0].reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
