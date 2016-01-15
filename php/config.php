<?php
	define("HOST", "localhost");
	define("USER", "root");
	define("PASSWORD", "");
	define("DATABASE", "the_entropics");

	define("CAN_REGISTER", "any");
	define("DEFAULT_ROLE", "member");

	define("SECURE", FALSE);    // FOR DEVELOPMENT ONLY!!!!

	// Create connection
	$conn = new mysqli(HOST, USER, PASSWORD, DATABASE);

	// Check connection
	if ($conn->connect_error)
		die("Connessione fallita: " . $conn->connect_error);
?>
