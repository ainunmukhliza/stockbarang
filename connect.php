<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];

//Data Base koneksi
$conn = new mysqli('localhost', 'root', '', 'persedian_barang');
if ($conn->connect_eror){
    die('Connection Failed:' .$conn->connect_eror);
}else{
    $stmt = $conn->prepare("insert into registration(firstName, lastName, email, password)
    values(?,?,?,?,?,?)");
    $stmt->bind_param("sssssi",$firstName, $lastName, $email, $password);
    $stmt->execute();
    echo"registration Successfully...";
    $stmt->close();
    $conn->close();
}