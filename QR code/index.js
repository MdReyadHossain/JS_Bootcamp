function qrgenarator() {
    let isValid = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if(name == "")
        isValid = false;

    if(email == "")
        isValid = false;

    if(isValid) {
        let txt = "Name: " + name + "\nEmail: " + email;
        let qrCodeContainer = document.querySelector(".qrcode");
        qrCodeContainer.innerHTML = "Scan Here: ";
        let qr = new QRCode(qrCodeContainer, {
            text: txt,
            width: 95,
            height: 100,
            colorDark : "#3388d6",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.Q
        });
    }
}
