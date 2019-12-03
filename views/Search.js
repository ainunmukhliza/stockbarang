<?php
function search($keyword){
    $query = "SELECT *FROM pembelian
    WHERE 
    NoNota LIKE '%$keyword%' OR
    Nama_Barang LIKE '%$keyword%' OR
    NamaSuplier LIKE '%$keyword%'";
    return query($query);
}
?>