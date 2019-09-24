var arreglo6 = [6,9,5,2,7];

function ordenAsc(arreglo6) {
    arreglo6.sort(function (a , b) {
        return a-b;
    });
    
    console.log(arreglo6);    
}
