<?php

class pembelian_Model extends CI_Model
{
    public function Getpembelian($id){
        if($id != null){
            $Id = $Id['Id'];
            $result = $this->db->query("
            SELECT
            pembelian.*,
            `suplier`.`Nama_Suplier`,
            `barang`.`Kode`,
            `barang`.`Nama`
          FROM
            `pembelian`
            INNER JOIN `barang` ON `barang`.`Nama` = `pembelian`.`Nama` AND
          `barang`.`Kode` = `pembelian`.`Kode`
            INNER JOIN `suplier` ON `suplier`.`Nama_Suplier` = `pembelian`.`Nama_Suplier` 
            ");
           
            return $result->result_array();
        }
        else{
            $result = $this->db->query("
            SELECT
            pembelian.*,
            `suplier`.`Nama_Suplier`,
            `barang`.`Kode`,
            `barang`.`Nama`
          FROM
            `pembelian`
            INNER JOIN `barang` ON `barang`.`Nama` = `pembelian`.`Nama` AND
          `barang`.`Kode` = `pembelian`.`Kode`
            INNER JOIN `suplier` ON `suplier`.`Nama_Suplier` = `pembelian`.`Nama_Suplier` 
            ");
            return $result->result_array();
        }
    }
    public function Insertpembelian($post){
        $result = $this->db->insert('pembelian',$post);
        return $result;
    }
    public function Updatepembelian($data)
    {
        $this->db->where("Id", $data->Id);
        $result = $this->db->update("pembelian", $data);
        return $result;
    }
    public function Deletepembelian($id){
        $this->db->where("Id", $id['Id']);
            $result =  $this->db->delete("pembelian");
            return $result;
    }
}  
       