//Escribe el texto pero empuja el resto de los elementos

function typeWriter(text, elementId, speed) {
    const txt = text.split('');
    let i = 0;
    const typingInterval = setInterval(function() {
        if (i < txt.length) {
            document.getElementById(elementId).innerHTML += txt[i];
            i++;
        } else {
            clearInterval(typingInterval);
            startCursorBlink(elementId);
        }
    }, speed);

    function startCursorBlink(elementId) {
        const cursorInterval = setInterval(function() {
            const element = document.getElementById(elementId);
            if (element.innerHTML.endsWith('|')) {
                element.innerHTML = element.innerHTML.slice(0, -1);
            } else {
                element.innerHTML += '|';
            }
        }, 600);
    }
}

const text = "Tradingo";
const elementId = "typing-effect";
const speed = 100;

typeWriter(text, elementId, speed);
