function encriptar() {
    var texto = document.getElementById("area-de-texto").value;
    var textoEnMinuscula= texto.toLowerCase();
    var textoArray = textoEnMinuscula.split(""); 
    var textoEncriptado = "";

    for (var i = 0; i < textoArray.length; i++) {
        switch (textoArray[i]) {
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "a":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += textoArray[i];
        }
    }

    document.getElementById("mensaje").textContent = textoEncriptado;
    document.getElementById("mensaje-secundario").textContent = "";
}

function desencriptar() {
    var texto = document.getElementById("area-de-texto").value;
    
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    
    document.getElementById("mensaje").textContent = texto;
    document.getElementById("mensaje-secundario").textContent = "";
}

async function copiarContenido() {

    let textoCopiado = document.getElementById("mensaje").innerText;
    try {
      await navigator.clipboard.writeText(textoCopiado);
      console.log('Contenido copiado al portapapeles');

    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
