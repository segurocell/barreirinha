document.addEventListener("DOMContentLoaded", function () {
    // Recupere as informações armazenadas localmente
    var placa = localStorage.getItem("placa");
    var qrCode = localStorage.getItem("qrCode");

    // Preencha as informações no comprovante
    document.getElementById("comprovantePlaca").textContent = placa;
    document.getElementById("qrCode").src = qrCode;

    // Adicione um botão de impressão
    var imprimirButton = document.createElement("button");
    imprimirButton.textContent = "Imprimir Comprovante";
    imprimirButton.onclick = function () {
        window.print(); // Abre a janela de impressão
    };
    document.getElementById("comprovante").appendChild(imprimirButton);
});
