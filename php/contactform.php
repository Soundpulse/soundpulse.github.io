<?php
	if(isset($_POST['submit'])){
		$name = $_POST['name'];
		$mailFrom = $_POST['email'];
		$message = $_POST['message'];
		
		$mailTo = "toby.io@outlook.com";
		$headers = "WEBSITE MESSAGE FROM: ".$mailFrom;
		$txt = "Recieved email from ".$name.".\n\n".$message; 
		
		mail($mailTo, $subject, $txt, $headers);
		header("Location: index.php?mailsend")
	}
?>