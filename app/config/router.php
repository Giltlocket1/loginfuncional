<?php
    if(isset($_REQUEST['view'])){
        $vista = $_REQUEST['view'];
    }else{
        $vista = "inventario";
    }
    switch($vista){
     
      case "login":{
            require_once './views/login.php';
            break;
        }
        case "registro":{
            require_once './views/registro.php';
            break;
        }
           case "inventario":{
            require_once './views/inventario.php';
            break;
        }
        
        default:{
            require_once './views/error404.php';
            break;
        }
    }
?> 