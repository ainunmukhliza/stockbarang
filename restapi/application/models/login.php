<?php

class login extends CI_Model
{
    public function index(){
            $this->load->view('halaman_login');
    }
    public function proses_login(){
       $user =$this->input->post('username');
       $pass =$this->input->post('password');

       $login =$this->user->cek->cek_user($user, $pass);

       if(!empty($login)){
           //login berhasi
           $this->session->set_userdata($login);
           redirect(base_url()));
       }else{
           //Login gagal
           $this->session->set_flashdata('gagal', 'Username atau password salah!');
           redirect(base_url('login'));
       }
}
}
