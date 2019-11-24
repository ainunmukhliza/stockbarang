<?php

class User extends CI_Model
{
    public function __construct(){
        parent::__construct();
        $this->load->model("User_model", "UserModel");
    }

    public function Login(){
        $data = $_GET;
        $result = $this->UserModel->login($data);
        $this->api_return(
            [
                "data"=>$result
            ], 200
        );
    }