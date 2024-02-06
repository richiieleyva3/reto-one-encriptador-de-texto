// Obtenemos el texto del div input
let input = document.getElementById('input');
// Obtenemos el texto del div output
let output = document.getElementById('output');
// Obtenemos el área de output sin datos
let areaOutputSinDatos = document.getElementsByClassName('area-output-sin-datos')[0];
// Obtenemos el área de output con datos
let areaOutputConDatos = document.getElementsByClassName('area-output-con-datos')[0];
// Obtenemos el botón de copiar
let botonCopiar = document.getElementById('copiar');

// Evento que encripta el texto del div input
function encriptar() {
    // Si el input esta vacio, mostramos un mensaje de alerta y salimos de la función
    if (input.innerText === '') {
        alert('Debes ingresar un texto para encriptar');
        return;
    }
    // Encriptamos el texto
    let texto = input.innerText;
    texto = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    output.innerHTML = texto;
    // ocultamos el área de output sin datos, mostramos el área de output con datos y el boton copiar
    areaOutputSinDatos.style.display = 'none';
    areaOutputConDatos.style.display = 'block';
    botonCopiar.style.display = 'block';
    return;
}

// Evento que desencripta el texto del div input
function desencriptar() {
    // Si el input esta vacio, mostramos un mensaje de alerta y salimos de la función
    if (input.innerText === '') {
        alert('Debes ingresar un texto para encriptar');
        return;
    }
    // Desencriptamos el texto
    let texto = input.innerText;
    texto = texto
    .replace(/enter/g, '-enter-')
    .replace(/imes/g, '-imes-')
    .replace(/ai/g, '-ai-')
    .replace(/ober/g, '-ober-')
    .replace(/ufat/g, '-ufat-');
    texto = texto
    .replace(/-enter-/g, 'e')
    .replace(/-imes-/g, 'i')
    .replace(/-ai-/g, 'a')
    .replace(/-ober-/g, 'o')
    .replace(/-ufat-/g, 'u');
    output.innerHTML = texto;
    // ocultamos el área de output sin datos, mostramos el área de output con datos y el boton copiar
    areaOutputSinDatos.style.display = 'none';
    areaOutputConDatos.style.display = 'block';
    botonCopiar.style.display = 'block';
    return;
}

// Evento que copia el texto del div output al portapapeles
function copiar() {
    if (output.innerHTML === '') {
        alert('No hay resultados. Debes ingresar un texto para encriptar o desencriptar y pulsar el botón correspondiente.');
        return;
    }
    // Verificar si el navegador admite el acceso al portapapeles
    if (navigator.clipboard) {
        // Intentar copiar al portapapeles
        navigator.clipboard.writeText(output.innerText)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                alert('Error al copiar texto al portapapeles. Por favor, seleccione el texto y copie manualmente.');
            });
    } else {
        // Si el navegador no admite el acceso al portapapeles, indica al usuario que copie manualmente
        alert('Seleccione el texto y cópielo manualmente, porque su navegador no admite el acceso al portapapeles.');
    }
}

// Evento que restablece la pagina al dar clic en el logotipo
function restablecer() {
    input.innerHTML = '';
    output.innerHTML = '';
    areaOutputSinDatos.style.display = 'flex';
    areaOutputConDatos.style.display = 'none';
    botonCopiar.style.display = 'none';
}

// Evento para verificar que se no se ingrese el patron (mayusculas y acentos) en el input en dispositivos touch
function patron(elemento) {
    // Obtener el contenido del div
    let contenido = elemento.innerText;

    // Validar si el contenido contiene alguna letra mayúscula
    if (/[A-ZÁÉÍÓÚáéíóú´]/.test(contenido)) {
        // Eliminar solo las letras mayúsculas encontradas
        let nuevoContenido = contenido.replace(/[A-ZÁÉÍÓÚáéíóú´]/g, '');
        elemento.innerText = nuevoContenido;
    }

        // Crear un rango y una selección
        let range = document.createRange();
        let sel = window.getSelection();

        // Mover el rango al final del div
        range.setStart(elemento, elemento.childNodes.length);
        range.collapse(true);

        // Eliminar cualquier selección existente y añadir el nuevo rango
        sel.removeAllRanges();
        sel.addRange(range);
}

// Evento que convierte el texto pegado en input en texto plano
input.addEventListener('paste', function(event) {
    event.preventDefault();
    let text = event.clipboardData.getData('text/plain');
    input.innerHTML = text;
});
