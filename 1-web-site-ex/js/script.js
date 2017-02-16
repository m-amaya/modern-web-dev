$(document).ready(function() {
    var hidden        = true;
    var $alert_button = $('.btn-alert');
    var $alert        = $('.alert');

    $alert_button.on('click', function() {
        if(hidden) {
            $alert.removeClass('hide');
            $alert_button.text('Hide Message');
            hidden = false;
        } else {
            $alert.addClass('hide');
            $alert_button.text('Show Message');
            hidden = true;
        }
    });
});
