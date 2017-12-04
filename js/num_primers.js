function esprimer(numero) {
    var x = numero - 1;
    while (x>=2) {
        if (numero%x==0) {
            return false;
        }
        x--;
    }
    return true;
    
    
}