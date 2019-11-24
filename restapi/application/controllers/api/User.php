<?php

class login extends CI_Model
{
    public function cek_user($Username,$Password)
    {
       $this->db->where("email = '$Username' or username = '$Username'");
       $this->db->where('password', md5($Password));
       $query = $this->db->get('user');
       return $query->row_array();
    }
}