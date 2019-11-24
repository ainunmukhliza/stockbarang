<?php

class suplier_Model extends CI_Model
{
    public function Getsuplier(){
        $data = $this->db->get('suplier');
        return $data->result_object();
    }
    public function Insertsuplier($post){
        $result = $this->db->insert('suplier',$post);
        return $result;
    }
    public function Updatesuplier($data)
    {
        $this->db->where("IdSuplier", $data->IdSuplier);
        $result = $this->db->update("suplier", $data);
        return $result;
    }
    public function Deletesuplier($id){
        $this->db->where("IdSuplier", $id['IdSuplier']);
            $result =  $this->db->delete("suplier");
            return $result;
    }
}  
       