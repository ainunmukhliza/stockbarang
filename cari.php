<style type="text/css">
</style>
<tr align="center">
<td>No</td>
<td>ID Suplier</td>
<td>Nama Suplier</td>
</tr>
<?php
mysql_connect("localhost","root","");
mysql_select_db("suplier.php");
$name=$_POST['name'];
$pilih = mysql_query("SELECT*from Suplier.html where nama like'%$name%'");
while($data = mysql_fetch_arry($pilih))
{
    echo "<tr>":?>
        <td><? echo"$data[no]":?></td>
        <td><? echo"$data[Id_Suplier]":?></td>
        <td><? echo"$data[Nama_Suplier]":?></td>
</tr> 
<?
}