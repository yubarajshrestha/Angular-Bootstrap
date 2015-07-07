<?php

	$host = "localhost";
	$user = "root";
	$pass = "mysql";
	$base = "earthquake";
	// Create connection
	$conn = new mysqli($host, $user, $pass, $base);
	// Check connection
	if ($conn->connect_error) {
	    die("DB connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT * FROM `data` ORDER BY `id` DESC";
	$qry = $conn->query($sql);

	$data = array();

	if ($qry->num_rows > 0) {
	    while($row = $qry->fetch_object()) {
	        $data[] = $row;
	    }
	} else {
	    echo "0 results";
	}

	// echo "<pre>";
	// var_dump($data);
	// echo "</pre>";


	$conn->close();
	
	echo json_encode($data);