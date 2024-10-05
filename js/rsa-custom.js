$(document).ready(function () {
    $('#appointment-form').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = $(this).serialize();

        // AJAX request
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'), // Send to the action URL of the form
            data: formData,
            success: function (response) {
                // Show success alert
                $('#alert-placeholder').html(`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                ${response}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `);
                $('#appointment-form')[0].reset(); // Reset the form
            },
            error: function () {
                // Show error alert
                $('#alert-placeholder').html(`
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                There was an error sending your appointment request. Please try again later.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `);
            }
        });
    });
});