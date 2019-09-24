function fibonacci(){
    var n = 0;
    var arreglo7 = [];

    var num7 = parseInt(prompt('Ingrese un numero: '));
    
    for (n; n < num7; n++) {
        if (n == 0) {
            arreglo7.push(0);
        }
        else if(n == 1){
            arreglo7.push(1);
        }
        else{
            arreglo7.push(arreglo7[n-1]+ arreglo7[n-2]);
        }        
    }
    console.log(arreglo7);
}