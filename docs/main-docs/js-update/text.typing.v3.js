//Escribe el texto no empuja al resto de los elementos y el cursor parpadea al finalizar

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

    function keepCursorBlinking() {
        const cursorElement = document.querySelector(`#${elementId} span`);
        if (cursorElement) {
            cursorElement.style.display = cursorElement.style.display === 'none' ? 'inline-block' : 'none';
        }
    }

    setInterval(keepCursorBlinking, 700); 
}

const text = "Tradingo";
const elementId = "typing-effect";
const speed = 100;

typeWriter(text, elementId, speed);
