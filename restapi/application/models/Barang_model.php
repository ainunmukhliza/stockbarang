<?php

class barang_Model extends CI_Model
{
    public function Getbarang(){
        $data = $this->db->get('barang');
        return $data->result_object();
    }
    public function Insertbarang($post){
        $result = $this->db->insert('barang',$post);
        return $result;
    }
    public function Updatebarang($data)
    {
        $this->db->where("IdBarang", $data->IdBarang);
        $result = $this->db->update("barang", $data);
        return $result;
    }
    public function Deletebarang($id){
        $this->db->where("IdBarang", $id['IdBarang']);
            $result =  $this->db->delete("barang");
            return $result;
    }
}  
       