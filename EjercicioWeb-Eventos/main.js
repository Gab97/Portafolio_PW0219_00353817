function main() {
    let journal = [];

    function addEntry(events, accident) {
        journal.push({ events, accident });
        /******************************************         
         * Is {events, accident}  shorthand to    *
         * {events: events, accident: accident}   *
         *****************************************/
    }

    addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
    addEntry(["weekend", "cycling", "break", "peanuts", "beer"], false);

    addEntry(["weekend", "cycling", "break", "peanuts", "beer"], false);
    addEntry(["weekend", "cycling", "break"], false);

    var tablita = (event) => {
        var arrg = [0, 0, 0, 0];
        for (let i = 0; i < journal.length; i++) {
            let index = 2;
            if (journal[i].events.includes(event)) index -= 2;
            if (!journal[i].accident) index += 1;
            arrg[index]++;
        }
        return arrg;
    }

    function phi(arreglo) {
        var n11n00 = arreglo[0] * arreglo[3];
        var n10n01 = arreglo[1] * arreglo[2];

        var n1 = arreglo[0] + arreglo[2];
        var n0 = arreglo[1] + arreglo[3];

        var nc1 = arreglo[0] + arreglo[1];
        var nc0 = arreglo[2] + arreglo[3];

        return (n11n00 - n10n01) /
            Math.sqrt(n1 * n0 * nc1 * nc0);
    }

    phi(tablita("beer"));

    let texto = document.getElementById("events")
    let acc = document.getElementById("accidente")

    let btn_dia = document.getElementById("add_dia")
    let btn_evento = document.getElementById("add_evento")

    var eventos = document.getElementById("eventos");
    var lista = document.getElementById("lista")



    acc.checked = false;

    function listar() {
        let cont = 0;

        journal.forEach(element => {
            console.log(element)
            lista.innerHTML += "<li>" + element["events"] + ' |¿Hubo accidente? ' + element["accident"] + "</li>";
        });
    }

    var eventos_auxiliar = []
    btn_evento.addEventListener("click", function() {
        console.log("adding events");
        eventos_auxiliar.push(texto.value);
        eventos.innerHTML += texto.value + " ";
    })

    btn_dia.addEventListener("click", function() {
        console.log("adding days");
        console.log(acc.checked)
        addEntry(eventos_auxiliar, acc.checked);
        lista.innerHTML += "<li>" + eventos_auxiliar + ' |¿Hubo accidente? ' + acc.checked + "</li>";
        // listar();
        eventos_auxiliar = [];
        eventos.innerHTML = ""
    })



    listar();
}