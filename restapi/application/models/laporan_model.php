<?php

class laporan_Model extends CI_Model
{
    public function Getlaporan($id){
        if($id != null){
            $Id = $Id['Id'];
            $result = $this->db->query("
            SELECT
            laporan.*,
            `barang`.`Nama`,
            `barang`.`Merk`,
            `barang`.`Type`,
            `barang`.`Satuan`,
            `barang`.`Harga`,
            `barang`.`Kode`,
            `suplier`.`Nama_Suplier`,
            `penjualan`.`Tanggal`,
            `pembelian`.`Barang_Masuk`,
            `penjualan`.`NoNota`
          FROM
            `barang`
            INNER JOIN `laporan` ON `barang`.`Nama` = `laporan`.`Nama` AND
          `barang`.`Kode` = `laporan`.`Kode` AND `barang`.`Merk` = `laporan`.`Merk`
          AND `barang`.`Type` = `laporan`.`Type` AND `barang`.`Satuan` =
          `laporan`.`Satuan` AND `barang`.`Harga` = `laporan`.`Harga`
            INNER JOIN `suplier` ON `suplier`.`Nama_Suplier` = `laporan`.`Nama_Suplier`
            INNER JOIN `penjualan` ON `penjualan`.`Tanggal` = `laporan`.`Tanggal` AND
          `penjualan`.`JumlahBarang` = `laporan`.`Barang_Keluar` AND
          `penjualan`.`NoNota` = `laporan`.`NoNota`
            INNER JOIN `pembelian` ON `pembelian`.`Barang_Masuk` =
          `laporan`.`Barang_Masuk`
            ");
return $result->result_array();
}
else{
    $result = $this->db->query("
    SELECT
            laporan.*,
            `barang`.`Nama`,
            `barang`.`Merk`,
            `barang`.`Type`,
            `barang`.`Satuan`,
            `barang`.`Harga`,
            `barang`.`Kode`,
            `suplier`.`Nama_Suplier`,
            `penjualan`.`Tanggal`,
            `pembelian`.`Barang_Masuk`,
            `penjualan`.`NoNota`
          FROM
            `barang`
            INNER JOIN `laporan` ON `barang`.`Nama` = `laporan`.`Nama` AND
          `barang`.`Kode` = `laporan`.`Kode` AND `barang`.`Merk` = `laporan`.`Merk`
          AND `barang`.`Type` = `laporan`.`Type` AND `barang`.`Satuan` =
          `laporan`.`Satuan` AND `barang`.`Harga` = `laporan`.`Harga`
            INNER JOIN `suplier` ON `suplier`.`Nama_Suplier` = `laporan`.`Nama_Suplier`
            INNER JOIN `penjualan` ON `penjualan`.`Tanggal` = `laporan`.`Tanggal` AND
          `penjualan`.`JumlahBarang` = `laporan`.`Barang_Keluar` AND
          `penjualan`.`NoNota` = `laporan`.`NoNota`
            INNER JOIN `pembelian` ON `pembelian`.`Barang_Masuk` =
          `laporan`.`Barang_Masuk`
            ");
            return $result->result_array();
        }
    }
    public function Insertlaporan($post){
        $result = $this->db->insert('laporan',$post);
        return $result;
    }
    public function Updatelaporan($data)
    {
        $this->db->where("Id", $data->Id);
        $result = $this->db->update("laporan", $data);
        return $result;
    }
    public function Deletelaporan($id){
        $this->db->where("Id", $id['Id']);
            $result =  $this->db->delete("laporan");
            return $result;
    }
}  
       