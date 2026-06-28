window.onload = function() {
    const palos = ["spade", "club", "heart", "diamond"];
    const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const indicePalo = Math.floor(Math.random() * palos.length);
    const indiceNumero = Math.floor(Math.random() * numeros.length);

    const paloSeleccionado = palos[indicePalo];
    const numeroSeleccionado = numeros[indiceNumero];

    const carta = document.getElementById("pokerCard");
    const contenedorNumero = document.querySelector(".card-number");

    carta.className = `card ${paloSeleccionado}`;
    
    contenedorNumero.innerHTML = numeroSeleccionado;
};