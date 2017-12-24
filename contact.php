<?php

/* Contact form code */

if(isset($_POST['submit'])){

	if(isset($_POST['fullname']) && isset($_POST['email']) && 
		isset($_POST['description']) && isset($_POST['price'])){

			$fullname = $_POST['fullname'];
			$email = $_POST['email'];
			$description = $_POST['description'];
			$price = $_POST['price'];

			//TODO: Send orders to database


			//mail("orders@smath.eu", "Order", $description . " <br> <b> BUDJET: $price </b>");

	}

} else {
	echo "<p> Please press submit to submit the contact form. </p>";
}

header('location: ./#contact');

?>