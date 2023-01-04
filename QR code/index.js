function qrgenarator() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let qrCodeContainer = document.querySelector(".qrcode");
    let txt = "Name: " + name + "\nEmail: " + email;

    qrCodeContainer.innerHTML = ""
    new QRCode(qrCodeContainer, txt);
}