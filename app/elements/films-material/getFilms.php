<?php
    header('Content-Type: application/json');
    include_once("functions.php");
	
	$root = "/home/downloads/download/Film";
	$link = "http://downloads.serben.tk/Film";
	
    echo getFilmsJSON($link, $root);
