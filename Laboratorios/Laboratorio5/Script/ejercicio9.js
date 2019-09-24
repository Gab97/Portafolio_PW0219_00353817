function circunferencia(){
    let total = 0;
    var radio = parseInt(prompt('Ingrese el radio: '));

    if (radio > 0) {
        total = (Math.PI * Math.pow(radio, 2)); 
        return total;
    }
    else{
        console.log('-1');
    }
}