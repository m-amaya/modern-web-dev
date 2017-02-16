$(document).ready(function() {
    var hidden           = true;
    var $create_button   = $('.btn-create');
    var $message_wrapper = $('.message-wrapper');
    var $message_form    = $('.message-form');
    var $message_alert   = $('.alert-message');

    $create_button.on('click', function() {
        if(hidden) {
            $message_wrapper.removeClass('hide');
            $create_button.text('Hide Message');
            hidden = false;
        } else {
            $message_wrapper.addClass('hide');
            $create_button.text('Create Message');
            $message_alert.addClass('hide');
            hidden = true;
        }
    });

    $message_form.on('submit', function(e) {
        e.preventDefault();

        var raw = $message_form.serialize();
        var message = raw.split('message=')[1];

        $.ajax({
            method: 'POST',
            url: '/message',
            data: {
                message: message
            }
        }).done(function(message) {
            var decoded_msg = decodeURIComponent(message.message.replace(/\+/g, ' '));
            var text        = "<strong>Received:</strong> " + decoded_msg;
            $message_alert.html(text);
            $message_alert.removeClass('hide');
        });
    });
});
