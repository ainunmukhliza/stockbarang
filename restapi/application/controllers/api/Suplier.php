<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH.'/libraries/API_Controller.php';
class suplier extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("suplier_model","suplierModel");
    }
    public function Getsuplier(){
        $Output = $this->suplierModel->Getsuplier();
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
 Public function Insertsuplier(){
    $post = $this->input->raw_input_stream;
    $Output = $this->suplierModel->Insertsuplier(json_decode($post));
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
 public function Updatesuplier()
 {
     $data = json_decode($this->input->raw_input_stream);
     $result = $this->suplierModel->Updatesuplier($data);
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
public function Deletesuplier()
{
    $id = $_GET;
    $result = $this->suplierModel->Deletesuplier($id);
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