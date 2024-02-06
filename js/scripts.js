// Obtenemos el texto del div input
let input = document.getElementById('input');
// Obtenemos el texto del div output
let output = document.getElementById('output');
// Obtenemos el área de output sin datos
let areaOutputSinDatos = document.getElementsByClassName('area-output-sin-datos')[0];
// Obtenemos el área de output con datos
let areaOutputConDatos = document.getElementsByClassName('area-output-con-datos')[0];
// Obtenemos el botón de copiar
let botonCopiar = document.getElementsByClassName('btn-line-output')[0];

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
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
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
    navigator.clipboard.writeText(output.innerHTML);
}

// Evento que restablece la pagina al dar clic en el logotipo
function restablecer() {
    input.innerHTML = '';
    output.innerHTML = '';
    areaOutputSinDatos.style.display = 'flex';
    areaOutputConDatos.style.display = 'none';
    botonCopiar.style.display = 'none';
}

// Evento que al presionar una tecla en el div input, verifica si es una letra mayúscula o una tilde y la elimina
input.addEventListener('keypress', function(event) {
    let caracter = event.key;
    if (/[A-ZÁÉÍÓÚáéíóú´]/.test(caracter)) {
        event.preventDefault();
    }
});

// Evento que convierte el texto pegado en input en texto plano
input.addEventListener('paste', function(event) {
    event.preventDefault();
    let text = event.clipboardData.getData('text/plain');
    input.innerHTML = text;
});
