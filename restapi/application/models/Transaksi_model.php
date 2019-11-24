<?php

class transaksi_Model extends CI_Model
{
    public function Gettransaksi($id){
        if($id != null){
            $NoNota = $id['NoNota'];
            $result = $this->db->query("
            SELECT
            transaksi.*,
            barang.Nama,
            suplier.Nama_Suplier
            FROM
             `transaksi`
             INNER JOIN `barang` ON `transaksi`.`Nama` = `barang`.`Nama`
             INNER JOIN `suplier` ON `transaksi`.`Nama_Suplier` = `suplier`.`Nama_Suplier`    
            ");
           
            return $result->result_array();
        }
        else{
            $result = $this->db->query("
            SELECT
            transaksi.*,
            barang.Nama,
            suplier.Nama_Suplier
            FROM
             `transaksi`
             INNER JOIN `barang` ON `transaksi`.`Nama` = `barang`.`Nama`
             INNER JOIN `suplier` ON `transaksi`.`Nama_Suplier` = `suplier`.`Nama_Suplier`    
            ");
            return $result->result_array();
        }
    }
    public function Inserttransaksi($post){
        $result = $this->db->insert('transaksi',$post);
        return $result;
    }
    public function Updatetransaksi($data)
    {
        $this->db->where("NoNota", $data->NoNota);
        $result = $this->db->update("transaksi", $data);
        return $result;
    }
    public function Deletetransaksi($id){
        $this->db->where("NoNota", $id['NoNota']);
            $result =  $this->db->delete("transaksi");
            return $result;
    }
}  
       