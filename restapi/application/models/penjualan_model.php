<?php

class penjualan_Model extends CI_Model
{
    public function Getpenjualan($id){
        if($id != null){
            $Id_penjualan = $Id['Id_penjualan'];
            $result = $this->db->query("
            SELECT
            penjualan.*,
            `barang`.`Nama`,
            `barang`.`Type`
            FROM
              `barang`
              INNER JOIN `penjualan` ON `barang`.`Nama` = `penjualan`.`Nama` AND
              `barang`.`Type` = `penjualan`.`Type`
            ");
           
            return $result->result_array();
        }
        else{
            $result = $this->db->query("
            SELECT
            penjualan.*,
            `barang`.`Nama`,
            `barang`.`Type`
            FROM
              `barang`
              INNER JOIN `penjualan` ON `barang`.`Nama` = `penjualan`.`Nama` AND
              `barang`.`Type` = `penjualan`.`Type`
            ");
            return $result->result_array();
        }
    }
    public function Insertpenjualan($post){
        $result = $this->db->insert('penjualan',$post);
        return $result;
    }
    public function Updatepenjualan($data)
    {
        $this->db->where("Id_penjualan", $data->Id_penjualan);
        $result = $this->db->update("penjualan", $data);
        return $result;
    }
    public function Deletepenjualan($id){
        $this->db->where("Id_penjualan", $id['Id_penjualan']);
            $result =  $this->db->delete("penjualan");
            return $result;
    }
}  
       