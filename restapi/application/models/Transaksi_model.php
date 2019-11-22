<?php

class Transaksi_Model extends CI_Model{

    public function get($id){
        if($id != null){
            $this->db->where('id_transaksi', $id['id_Transaksi']);
            $result = $this->db->get('transaksi');
            return $result->result_array();
        }
        else {
            $result = $this->db->get('transaksi');
            return $result->result_array();
        }
    }
    public function insert($data){
        $result = $this->db->insert('transaksi', $data);
        return $result;
    }
    public function update($data){
        $this->db->where("id_transaksi", $data->id_Transaksi);
        $result =  $this->db->update("transaksi", $data);
        return $result;
    }
    public function delete($id){
        $result = $this->db->where('id_transaksi', $id['id_Transaksi']);
        $result = $this->db->delete('transaksi');
        return $result;
    }
}
