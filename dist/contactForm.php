<?php

if(isset($_POST['submit'])) {
	$userName = $_POST['name'];
	$userEmail = $_POST['email'];
	$userPhone = $_POST['phone'];
	$message = $_POST['message'];

	$mailTo = "leonardochik@hotmail.com";
	$subject = "Sale Closet Mensaje".$userName;
	$body = "Mensaje Recibido de ".$userName."Email:".$userEmail."Mensaje: ".$message;
	$mailFrom = "From: ".$userEmail;

	mail($mailTo, $subject, $body, $mailFrom);

	header('Location: https://saleclosettest.netlify.app/contactForm.php')
}
