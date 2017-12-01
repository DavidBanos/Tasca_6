function esprimer(numero) {
    var x = numero - 1;
    while (x>=2) {
        if (numero%x==0) {
            return false;
        }
        x--;
    }
    return true;
  
  
    /*
    esprimer=true;
    i=2
    for (var i = 2; i<numero; i++) {
        if(numero%i==0){
            return false;
        }
        
    }

return numero !== 1;
*/}