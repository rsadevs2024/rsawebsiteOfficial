<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $name = htmlspecialchars($_POST['appointment_name']);
        $email = htmlspecialchars($_POST['appointment_email']);
        $date = htmlspecialchars($_POST['appointment_date']);
        $time = htmlspecialchars($_POST['appointment_time']);
        $service = htmlspecialchars($_POST['service']);
        $branch = htmlspecialchars($_POST['branch']);
        $phone = htmlspecialchars($_POST['phone']);
        $message = htmlspecialchars($_POST['message']);

        // Recipient email
        $to = 'royaleskinaesthetics.official@gmail.com'; // Change to your email address

        // Subject
        $uuid = substr(bin2hex(random_bytes(3)), 0, 5);

        $subject = 'New Appointment Request:' . $branch . ' #' . $uuid;

        // Email content
        $body = "You have received a new appointment request.\n\n" .
            "Details:\n" .
            "-------------------------------------\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Date: $date\n" .
            "Time: $time\n" .
            "Service: $service\n" .
            "Branch: $branch\n" .
            "Message: $message\n" .
            "-------------------------------------\n" .
            "Please respond to this request at your earliest convenience.\n\n" .
            "Best regards,\n" .
            "Your Royale Skin Aesthetics Team";

        // Headers
        $headers = "From: $name <$email>";
        // Send email
        if (!@mail($to, $subject, $body, $headers)) {
            // If mail() fails, throw an exception
            throw new Exception('There was an error sending your appointment request.');
        }
        echo "Your appointment request has been sent successfully!";
    } catch (Exception $e) {
        // Catch any errors and display the message
        echo 'There was an error sending your appointment request.';
    }
} else {
    echo "Invalid request.";
}
?>