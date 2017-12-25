<?php

    $conn = mysqli_connect("127.0.0.1", "my_user", "my_password", "my_db");

    if(!$conn){
        echo "<p>Could not connect to database.</p>";
        exit;
    }
?>