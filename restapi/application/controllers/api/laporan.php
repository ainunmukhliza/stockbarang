<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH.'/libraries/API_Controller.php';
class laporan extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("laporan_model","laporanModel");
    }
    public function Getlaporan(){
        $id=$_GET;
        $Output = $this->laporanModel->Getlaporan($id);
        if($Output !=null || count($Output)>0){
            $this->api_return(
                [
                    'status' => true,
                    "result" => $Output
                ],
            200);
        }else{
            $this->api_return(
                [
                    'status' => false,
                ],
            400);
        }
     
    }
 Public function Insertlaporan(){
    $post = $this->input->raw_input_stream;
    $Output = $this->laporanModel->Insertlaporan(json_decode($post));
    if ($Output){ 
        $this->api_return(
            [
                'status' => true,
                "result" => $Output
            ],
            200);
        }else{
            $this->api_return(
                [
                    'status' => false,
                ],
            400);
            }
 }
 public function Updatelaporan()
 {
     $data = json_decode($this->input->raw_input_stream);
     $result = $this->laporanModel->Updatelaporan($data);
     if ($result){
         $this->api_return(
             [
                 'status'=>true
             ],
         200);
     }else{
         $this->api_return(
             [
                 'status'=>false
             ],
         400);
     }
 }
public function Deletelaporan()
{
    $id = $_GET;
    $result = $this->laporanModel->Deletelaporan($id);
    if ($result){
        $this->api_return(
            [
                'status'=>true
            ],
        200);
    }else{
        $this->api_return(
            [
                'status'=>false
            ],
        400);
    }
}
}