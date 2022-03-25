<?php

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$contra = $_POST['contraseña'];
$dni = $_POST['dni'];
$sexo = $_POST['sexo'];
$adjunto = $_POST['adjunto'];
$suscr_boletin = $_POST['suscr_boletin'];
$provincia = $_POST['provincia'];
$fecha = $_POST['fecha'];
$tema_interes = $_POST['interes'];


echo "<br/> &nbsp; DATOS RECIBIDOS";
echo "<br/> &nbsp; Nombre: " . $nombre;
echo "<br/> &nbsp; Apellidos: " . $apellidos;
echo "<br/> &nbsp; Contraseña: " . $contra;
echo "<br/> &nbsp; DNI: " . $dni;
echo "<br/> &nbsp; Sexo: " . $sexo;
echo "<br/> &nbsp; Adjunto: " . $adjunto;
echo "<br/> &nbsp; Suscripcion: " . $suscr_boletin;
echo "<br/> &nbsp; Provincia: " . $provincia;
echo "<br/> &nbsp; Fecha: " . $fecha;
echo "<br/> &nbsp; Temas de interes: " . $tema_interes;

?>