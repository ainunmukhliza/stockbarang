<?php

class Suplier_Model extends CI_Model{

    public function get($id){
        if($id != null){
            $this->db->where('id_suplier', $id['id_Suplier']);
            $result = $this->db->get('suplier');
            return $result->result_array();
        }
        else {
            $result = $this->db->get('suplier');
            return $result->result_array();
        }
    }
    public function insert($data){
        $result = $this->db->insert('suplier', $data);
        return $result;
    }
    public function update($data){
        $this->db->where("id_suplier", $data->id_Suplier);
        $result =  $this->db->update("suplier", $data);
        return $result;
    }
    public function delete($id){
        $result = $this->db->where('id_suplier', $id['id_suplier']);
        $result = $this->db->delete('suplier');
        return $result;
    }
}
