const textArea = document.querySelector(".text-area");
const resultado = document.querySelector(".resultado");
const munieco = document.querySelector(".munieco");
const infoContent = document.querySelector(".contenedor-info-munieco");
const copiar = document.querySelector(".btn-copiar");
const contenedorMunieco = document.querySelector(".Contenedor_munieco");



//  La letra "e" es convertida para "enter"
//  La letra "i" es convertida para "imes"
//  La letra "a" es convertida para "ai"
//  La letra "o" es convertida para "ober"
//  La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    resultado.innerText = textoEncriptado
    textArea.value = "";

    // Ocultar el muñeco y la información si hay texto encriptado
    if (textoEncriptado !== "") {
        munieco.style.display = "none";
        infoContent.style.display = "none";
        resultado.style.display = "block";
    }

}


function encriptar(fraseAEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    fraseAEncriptar = fraseAEncriptar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
         if(fraseAEncriptar.includes(matrizCodigo[i][0])){
            fraseAEncriptar = fraseAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
         }
        
    }
    return fraseAEncriptar
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    resultado.innerText = textoDesencriptado
    textArea.value = "";
}


function desencriptar(fraseADesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    fraseADesencriptar = fraseADesencriptar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
         if(fraseADesencriptar.includes(matrizCodigo[i][1])){
            fraseADesencriptar = fraseADesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
         }
        
    }
    return fraseADesencriptar
}   

function btnCopiar() {
    // Selecciono el contenido del div con la clase 'resultado'
    const textoACopiar = document.querySelector(".resultado").innerText;

    // Creo un textarea temporal para copiar el contenido
    const textarea = document.createElement("textarea");
    textarea.value = textoACopiar;

    // Añado el textarea temporal al documento
    document.body.appendChild(textarea);

    // Selecciono el contenido del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Elimino el textarea temporal del documento
    document.body.removeChild(textarea);

    // Pego el contenido copiado en el textarea con clase 'text-area'
    document.querySelector(".text-area").value = textoACopiar;

    // Notifica al usuario que el texto ha sido copiado
    alert("Texto copiado al portapapeles y pegado en el textarea!");

    setTimeout(() => {
        location.reload(); 
    }, 7700);   // lo uso para refrescar los estilos de inicio ya que tube conflictos para resetear los estilos y se me distorsionaba algunos estilos de cajas  del contenedor-munieco , fue la solucion provisoria no definitiva.
}


