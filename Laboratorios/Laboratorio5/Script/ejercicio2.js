arreglo2 = [1, 2, 3]

function sumaArreglo(arreglo2) {
    let _suma = 0,
        _promedio = 0,
        respuesta2 = {},
        mensaje = "";

    arreglo2.forEach(element => {
        _suma = _suma + element;
    });
    _promedio = _suma / arreglo2.length;

    respuesta2 = { suma: _suma, promedio: _promedio };
    mensaje = `Suma: ${_suma}\nPromedio: ${_promedio}`;
    console.log(mensaje);
    return respuesta2;
}