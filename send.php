<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$mail = $_POST['mail'];

// Формирование самого письма

If (!empty($_POST['mail'])) 
  {
    $title = "Новый пользователь Ehya";
    $body = "
    <b>Пользователь с Еmail:</b> $mail<b> зарегистрировался в Ehya</b>
    ";
  } 

  if (!empty($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['email'])) {
    $title = "Новый запрос на дополнительную информацию о книге";
    $body = "
    <h2>Запрос на дополнительную информацию о книге</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br>
    <b>Еmail:</b> $email<br>
    <b>Message:</b> $message<br>
    ";
  } 
  

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = '375445433672ab@gmail.com'; // Логин на почте
    $mail->Password   = '5433672Abcdf'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('375445433672ab@gmail.com', 'Yauheni Bychkou'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('375445433672@yandex.by');  
  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');