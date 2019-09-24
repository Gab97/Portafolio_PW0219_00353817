
function numeracion(arreglo1) {
    let contS = 0, contB = 0, contN = 0, contO = 0;
    let resp = '';

    arreglo1.forEach(element => {
        console.log(typeof element);

        switch (typeof element) {

            case 'String':
                contS++;
                break;

            case 'Bool':
                contB++;
                break;

            case 'Number':
                contN++;
                break;
            
            case 'Object':
                contO++;
                break;

            default:
                break;
        }

    });

    resp = `En el arreglo hay --> String: ${contS}\nBooleanos: ${contB}\nNumeros: ${contN}\nObjetos: ${contO}`;
    console.log(resp);
}