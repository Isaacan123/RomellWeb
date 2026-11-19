<?php
header('Content-Type: text/html; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: contacto.html');
  exit;
}

$nombre = trim($_POST['nombre'] ?? '');
$apellido = trim($_POST['apellido'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$puesto = trim($_POST['puesto'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $mensaje === '') {
  header('Location: contacto.html?error=1');
  exit;
}

$to = 'ventas@romelltextil.com';
$from = 'ventas@romelltextil.com';
$subject = 'Contacto web ROMELL TEXTIL';
$body = "Nuevo mensaje desde romelltextil.com\n\n";
$body .= "Nombre: {$nombre} {$apellido}\n";
$body .= "Email: {$email}\n";
$body .= "Teléfono: {$telefono}\n";
$body .= "Puesto: {$puesto}\n\n";
$body .= "Mensaje:\n{$mensaje}\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
  'From: ROMELL TEXTIL <' . $from . '>',
  'Reply-To: ' . $nombre . ' ' . $apellido . ' <' . $email . '>',
  'Return-Path: ' . $from,
  'X-Mailer: ROMELL-Web'
];

$ok = @mail($to, $encodedSubject, $body, implode("\r\n", $headers), '-f' . $from);

if (!$ok) {
  header('Location: contacto.html?error=1');
  exit;
}

header('Location: contacto.html?enviado=1');
exit;
