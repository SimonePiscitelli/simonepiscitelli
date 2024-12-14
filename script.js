const text = "Benvenuti nel mio sito!"; // Testo da visualizzare
let index = 0; // Indice per la posizione del carattere corrente
const speed = 100; // Velocità della digitazione in millisecondi

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed); // Chiama la funzione dopo un certo intervallo
    }
}

// Avvia l'effetto macchina da scrivere
window.onload = typeWriter;
