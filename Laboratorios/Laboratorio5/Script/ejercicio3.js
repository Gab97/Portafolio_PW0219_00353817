arreglo3 = [1, 2, 3, 2];

function numero(arreglo3, num3) {
    let contador = 0;
    arreglo3.forEach(element => {
        if (num3 == element) {
            contador++
        }
    });
    return contador;
}