
<?php
/*$name = $_POST['user-name'];

$mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            </ul>
    </body>
    </html>';
    echo $mail_message;
 */


$name = $_POST['user-name'];
$mail = $_POST['user-e-mail'];
$message = $_POST['user-message'];

$mail_message = '
<html>
<head>
    <title>Заявка</title>
</head>
<body>
    <h2>Заказ</h2>
    <ul>
        <li>Имя:' . $name . '</li>
        <li>E-mail: ' . $mail . '</li>
        <li>Message: ' . $message . '</li>      
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта <smi.tomsk@gmail.com>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('smi.tomsk@gmail.com', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>