function substituirLetras(texto, substituicoes) {
    for (const substituicao of substituicoes) {
        const [letra, stringSubstituta] = substituicao;
        const regex = new RegExp(letra, "igm");
        texto = texto.replace(regex, stringSubstituta);
    }
    return texto;
}

function criptografar() {
    const texto = document.getElementById("input").value.toLowerCase();
    const substituicoes = [
        ["e", "enter"],
        ["o", "ober"],
        ["i", "imes"],
        ["a", "ai"],
        ["u", "ufat"]
    ];
    const textocriptografado = substituirLetras(texto, substituicoes);

    atualizarOutput(textocriptografado);
}

function descriptografar() {
    const texto = document.getElementById("input").value.toLowerCase();
    const substituicoes = [
        ["enter", "e"],
        ["ober", "o"],
        ["imes", "i"],
        ["ai", "a"],
        ["ufat", "u"]
    ];
    const textocriptografado = substituirLetras(texto, substituicoes);

    atualizarOutput(textocriptografado);
}

function atualizarOutput(textocriptografado) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = textocriptografado;
    outputElement.style.display = "block";

    const outputHeight = outputElement.scrollHeight;
    outputElement.style.height = outputHeight > 450 ? "450px" : outputHeight + "px";

    document.getElementById("imagem").style.display = "none";
    document.getElementById("h3").style.display = "none";
    document.getElementById("paragrafo").style.display = "none";
    document.getElementById("botao-copiar").style.display = "block";
}

const botaoCopiar = document.getElementById("botao-copiar");
const output = document.getElementById("output");

botaoCopiar.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText(output.value);
        botaoCopiar.innerHTML = "Copiado";
        botaoCopiar.style.backgroundColor = "green";
        botaoCopiar.style.color = "white";
        setTimeout(function () {
            botaoCopiar.innerHTML = "Copiar";
            botaoCopiar.style.backgroundColor = "";
            botaoCopiar.style.color = "";
        }, 2000);
    } catch (err) {
        console.error('Não foi possível copiar o texto: ', err);
    }
});
