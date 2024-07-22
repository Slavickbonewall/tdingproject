//Completamente distinto al resto

function typeWriter(words, elementId, speed, delayBetweenWords, restartDelay, startDelay) {
    let wordIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let firstCycle = true; // Para verificar si es el primer ciclo
    const element = document.getElementById(elementId);

    // Función para inicializar el efecto de escritura
    function initialize() {
        if (firstCycle && words[0] === "Tradingo") {
            element.textContent = "Tradingo";
            wordIndex = 1; // Comienza desde el segundo elemento
            setTimeout(() => {
                element.textContent = ''; // Limpia el texto después de "Tradingo"
                setTimeout(type); // Espera antes de comenzar la escritura
            }, delayBetweenWords); // Tiempo que se muestra "Tradingo"
        } else {
            setTimeout(type, startDelay); // Espera antes de comenzar el ciclo de escritura
        }
        firstCycle = false; // Marca que el primer ciclo ha terminado
    }

    // Función que maneja el efecto de escritura
    function type() {
        if (isTyping) {
            if (charIndex < words[wordIndex].length) {
                element.textContent += words[wordIndex][charIndex];
                charIndex++;
                setTimeout(type, speed); // Llama a la función nuevamente después de un intervalo
            } else {
                isTyping = false;
                setTimeout(() => {
                    isTyping = true;
                    charIndex = 0;
                    wordIndex++;
                    if (wordIndex < words.length) {
                        element.textContent = '';
                        type();
                    } else {
                        wordIndex = 0; // Reinicia el ciclo de palabras
                        element.textContent = ''; // Limpia el texto antes de reiniciar
                        setTimeout(type, restartDelay); // Espera antes de reiniciar el ciclo de palabras
                    }
                }, delayBetweenWords);
            }
        }
    }

    // Inicializa el efecto de escritura
    initialize();
}

// Array de palabras a escribir
const words = ["Tradingo", "Learn", "Educate", "Knowledge"];
// ID del elemento HTML donde se mostrará el texto
const elementId = "typing-effect";
// Velocidad de escritura en milisegundos por carácter
const speed = 100;
// Retraso entre palabras en milisegundos
const delayBetweenWords = 6000;
// Retraso antes de reiniciar el ciclo en milisegundos
const restartDelay = 0;
// Retraso antes de comenzar el ciclo en milisegundos
const startDelay = 3000;

// Llama a la función para iniciar el efecto de escritura
typeWriter(words, elementId, speed, delayBetweenWords, restartDelay, startDelay);
