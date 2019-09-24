palabra = 'ciervo';

function palindromo(palabra){
let palabraReverse = '', mensaje5= '';
    palabra = palabra.toLowerCase();

    palabraReverse = palabra.split("").reverse().toString();
    
    for (let i = 0; i < ((palabraReverse.length)-1); i++) {
        palabraReverse = palabraReverse.replace(",", "")
    }

    if (palabra == palabraReverse) {
        mensaje5 = `Tu palabra es palindromo!`;
        console.log(mensaje5);
    }
    else{
        mensaje5 = `Tu palabra no es palindromo.`;
        console.log(mensaje5);
    }
}