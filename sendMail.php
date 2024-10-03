<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['appointment_name']);
    $email = htmlspecialchars($_POST['appointment_email']);
    $date = htmlspecialchars($_POST['appointment_date']);
    $time = htmlspecialchars($_POST['appointment_time']);
    $service = htmlspecialchars($_POST['service']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email
    $to = 'christianex.cadevida@gmail.com'; // Change to your email address

    // Subject
    $subject = 'New Appointment Request:' . $service;

    // Email content
    $body = "Name: $name\nEmail: $email\nDate: $date\nTime: $time\nService: $service\nPhone: $phone\nMessage: $message";

    // Headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>