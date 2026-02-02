<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name    = htmlspecialchars($_POST['name']);
  $email   = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = "studiothriveportfolio@gmail.com"; // 🔴 APNA EMAIL
  $subject = "New Contact Message - Studio Thrive";

  $body = "
  Name: $name\n
  Email: $email\n
  Message:\n$message
  ";

  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "<script>alert('Message sent successfully!'); window.history.back();</script>";
  } else {
    echo "<script>alert('Message sending failed! Try again later'); window.history.back();</script>";
  }
}
?>
