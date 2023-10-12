function gerarComprovante() {
    var placa = document.getElementById("placa").value;
    var qrCode = "qr.png"; // Substitua pelo caminho correto para a imagem do QR Code

    // Preencha as informações no comprovante
    localStorage.setItem("placa", placa);
    localStorage.setItem("qrCode", qrCode);

    // Redirecione para a página de comprovante
    window.location.href = "comprovante.html";
}
