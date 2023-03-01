let listaSpesaElement = document.getElementById("lista-spesa");
let listaSpesaArray = ["latte", "uova", "cereali", "pasta", "ravioli", "banane","mele", "cipolla", "limoni","sedano"]

let contatore = 0;

while( contatore < listaSpesaArray.length){
    let nuovoEleLista = document.createElement("li");
    nuovoEleLista.innerText = listaSpesaArray[contatore];
    listaSpesaElement.append(nuovoEleLista);

    contatore++;
}
