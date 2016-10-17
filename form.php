<?php
sleep(3);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$to = "marcmorales345@gmail.com";
$sub = "a message from $name = SMC informatics website";
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Message: $message\n";

mail($to, $sub, $body, "Someone messaged you from your SMC website");
?>