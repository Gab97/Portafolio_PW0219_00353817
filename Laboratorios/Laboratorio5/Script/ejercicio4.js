

function arrRandom(){
    let mensaje4 = '', contador4 = 0;
    arreglo4 = [];
    var num4 = parseInt(prompt('Ingrese un numero: '));

    for (let index = 0; index < 20; index ++) {
        arreglo4.push(Math.floor(Math.random()* 100 + 1));
    }

    arreglo4.forEach(element => {
        if (num4 == element){
            contador4 ++;
        }    
    });
    
    if (contador4 >0){
        mensaje4 = `Ganaste!`;
        console.log(mensaje4);
    }
    else{
        mensaje4 = `Perdiste...`;
        console.log(mensaje4);
    }  
    
    return arreglo4;
}
