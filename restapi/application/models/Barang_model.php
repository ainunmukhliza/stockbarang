<?php

class Barang_Model extends CI_Model{

    public function get($id){
        if($id != null){
            $this->db->where('id_Barang', $id['id_Barang']);
            $result = $this->db->get('periode');
            return $result->result_array();
        }
        else {
            $result = $this->db->get('Barang');
            return $result->result_array();
        }
    }
    public function insert($data){
        $result = $this->db->insert('Barang', $data);
        return $result;
    }
    public function update($data){
        $this->db->where("id_barang", $data->id_Barang);
        $result =  $this->db->update("barang", $data);
        return $result;
    }
    public function delete($id){
        $result = $this->db->where('id_barang', $id['id_Barang']);
        $result = $this->db->delete('barang');
        return $result;
    }
}
