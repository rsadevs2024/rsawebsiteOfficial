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

$(document).ready(function() {
    // When a menu item is clicked, remove 'active' class from all items and add to the clicked one
    $('.navbar-nav .nav-item a').on('click', function() {
      $('.navbar-nav .nav-item').removeClass('active'); // Remove 'active' class from all
      $(this).parent().addClass('active'); // Add 'active' class to the clicked item
    });

    // Optional: Highlight "Feedbacks" when scrolling to the feedback section
    $(window).scroll(function() {
        var bookAppointment = $('#book-appointment-section').offset().top - $(window).height() / 2;
        if ($(window).scrollTop() >= bookAppointment) {
          $('.navbar-nav .nav-item').removeClass('active');
          $('.navbar-nav .nav-item a[href="#book-appointment-section"]').parent().addClass('active');
        }
      var sectionOffset = $('#feedback-section').offset().top - $(window).height() / 2;
      if ($(window).scrollTop() >= sectionOffset) {
        $('.navbar-nav .nav-item').removeClass('active');
        $('.navbar-nav .nav-item a[href="#feedback-section"]').parent().addClass('active');
      }

     
    });
   
  });