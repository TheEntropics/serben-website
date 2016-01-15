<?php

	$dir = $_POST['dir'];

	$files = array();
	$folders = array();

	// Is there actually such a folder/file?
	if(file_exists($dir)) {
		foreach(scandir($dir) as $f) {
			if(is_dir($dir . '/' . $f)) {
				// The path is a folder
				$folders[] = array(
					"name" => $f,
					"path" => $dir . '/' . $f
//					"items" => scan($dir . '/' . $f) // Recursively get the contents of the folder
				);
			} else {
				// It is a file
				$files[] = array(
					"name" => $f,
					"path" => $dir . '/' . $f,
					"ext" => pathinfo($dir, PATHINFO_EXTENSION),
					"size" => filesize($dir . '/' . $f) // Gets the size of this file
				);
			}
		}
	}

	header('Content-type: application/json');

	echo json_encode(array(
		"name" => $dir,
		"type" => "folder",
		"path" => $dir,
		"files" => $files,
		"folders" => $folders
	));
?>