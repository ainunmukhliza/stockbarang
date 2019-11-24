<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH.'/libraries/API_Controller.php';
class barang extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("barang_model","barangModel");
    }
    public function Getbarang(){
        $Output = $this->barangModel->Getbarang();
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
 Public function Insertbarang(){
    $post = $this->input->raw_input_stream;
    $Output = $this->barangModel->Insertbarang(json_decode($post));
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
 public function Updatebarang()
 {
     $data = json_decode($this->input->raw_input_stream);
     $result = $this->barangModel->Updatebarang($data);
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
public function Deletebarang()
{
    $id = $_GET;
    $result = $this->barangModel->Deletebarang($id);
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