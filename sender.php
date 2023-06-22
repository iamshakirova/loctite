<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "essfirekz@gmail.com, essfire-kz@mail.ru";
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = 'noreply@essgroup.kz';
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
	Текст: $text"; 
	mail($to, $subject, $msg, "From: $from ");

?>
<p>Привет, форма отправлена</p>