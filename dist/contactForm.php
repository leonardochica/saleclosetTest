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

	// echo $message;
	mail($mailTo, $subject, $body, $mailFrom);

	header('Location: https://saleclosettest.netlify.app/mensaje.html');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sale Closet Colombia | Tienda Virtual de Ropa y Accessorios para Mujer</title>
</head>
<body>
	<h1>Gracias por contactarnos</h1>
	<p>Su mensaje ha sido enviado y responderemos lo mas pronto posible</p>
</body>
</html>
