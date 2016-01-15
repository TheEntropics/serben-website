<?php
	require_once('config.php');
	require_once('functions.php');

	sec_session_start();

	if(isset($_POST['username'], $_POST['password'])) {
		$user = $_POST['username'];
		$pass = $_POST['password'];

		echo intval(login($user, $pass, $conn));
	} else
		// The fields are not set
		echo intval(4);
?>