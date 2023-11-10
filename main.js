//-------------
//Esercizio 2
//-------------
// const riempiArray = (numeroElementi, valoreMinimo, valoreMassimo) => {
//     const array = [];

//     for (let i = 0; i < numeroElementi; i++) {
//         const numeroCasuale = Math.floor(
//             Math.random() * (valoreMassimo - valoreMinimo + 1) + valoreMinimo
//         );
//         array.push(numeroCasuale);
//     }
//     return array;
// };

// let risultato = riempiArray(10, 5, 10);
// console.log(risultato);

// const contaPariDispari = (array) => {
//     let pariDispari = { pari: 0, dispari: 0 };
//     console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         let arrayI = array[i];
//         if (arrayI % 2 === 0) {
//             pariDispari.pari += 1;
//         } else if (arrayI % 2 !== 0) {
//             pariDispari.dispari += 1;
//         }
//     }
//     return pariDispari;
// };

// let conteggio = contaPariDispari(riempiArray(10, 5, 10));
// console.log(conteggio);

//-------------
//Esercizio 1
//------------
const analizzaTesto = (stringa) => {
    const reverse = (stringa) => {
        const separaStringa = stringa.split("");
        const invertiStringa = separaStringa.reverse();
        const unisciStringa = invertiStringa.join("");
        return unisciStringa;
    };

    const contieneJs = (stringa) => {
        if (stringa.includes("JS") || stringa.includes("Javascript")) {
            return true;
        } else {
            return false;
        }
    };

    return {
        originale: stringa,
        minuscolo: stringa.toLowerCase(),
        maiuscolo: stringa.toUpperCase(),
        senzaSpazi: stringa.trim(),
        numeroCaratteri: stringa.length,
        contieneJS: contieneJs(stringa),
        invertita: reverse(stringa),
    };
};

// console.log(analizzaTesto(" Hello word "));

//-------------
//Esercizio 3
//-------------

// window.addEventListener("load", () => {
//     const body = document.body;
//     const bottone = document.getElementById("bottoneInvio");
//     bottone.addEventListener("click", () => {
//         const input = document.getElementById("testoUtente");
//         const valoreInput = input.value;
//         if (valoreInput === "") {
//             alert("Inserisci del testo prima di inviare");
//         } else {
//             const creaP = document.createElement("p");
//             creaP.innerHTML = `questo e' il valore inserito: ${valoreInput}`;
//             body.appendChild(creaP);
//         }
//     });
// });

//-------------
//Esercizio 4
//-------------

window.addEventListener("load", () => {
    const body = document.body;
    const bottone = document.getElementById("bottoneInvio");

    bottone.addEventListener("click", () => {
        const input = document.getElementById("testoUtente");
        const valoreInput = input.value;
        const ul = document.createElement("ul");
        if (valoreInput === "") {
            alert("Inserisci del testo prima di inviare");
        } else {
            const creaP = document.createElement("p");
            const risultatoOgettto = analizzaTesto(valoreInput);
            const chiaveValore = Object.entries(risultatoOgettto);
            for (let i = 0; i < chiaveValore.length; i++) {
                let chiaveValoreI = chiaveValore[i];
                let chiave = chiaveValoreI[0];
                let valore = chiaveValoreI[1];
                const li = document.createElement("li");
                li.innerHTML = `${chiave}: ${valore} `;
                ul.appendChild(li);
                creaP.appendChild(ul);
            }
        }
        body.appendChild(ul);
    });
});
