//Escribe el texto y no empuja al resto de los elementos pero el cursor no parpadea al final

function typeWriter(text, elementId, speed) {
    const txt = text.split('');
    let i = 0;
    const typingInterval = setInterval(function() {
        if (i < txt.length) {
            document.getElementById(elementId).textContent += txt[i];
            i++;
        } else {
            clearInterval(typingInterval);
            startCursorBlink(elementId);
        }
    }, speed);

    function startCursorBlink(elementId) {
        const cursorElement = document.createElement('span');
        cursorElement.textContent = '|';
        cursorElement.style.animation = 'blink 0.7s infinite';
        cursorElement.style.display = 'inline-block';
        cursorElement.style.width = '0'; // Ajustar según el tamaño del cursor deseado

        document.getElementById(elementId).appendChild(cursorElement);
    }
}

const text = "¡Hola, mundo! Este es un ejemplo del efecto de escritura.";
const elementId = "typing-effect";
const speed = 100;

typeWriter(text, elementId, speed);
