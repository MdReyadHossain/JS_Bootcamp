function form() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;
    const fnameErr = document.getElementById("fnameErr");
    const lnameErr = document.getElementById("lnameErr");
    const emailErr = document.getElementById("emailErr");
    const passErr = document.getElementById("passErr");

    fnameErr.innerHTML = "";
    lnameErr.innerHTML = "";
    emailErr.innerHTML = "";
    passErr.innerHTML = "";

    document.addEventListener("submit", formHandler);

    function formHandler(event) {
        event.preventDefault(); // page will not load

        if (firstName.value == "") {
            isValid = false;
            fnameErr.innerHTML = "❗Must be fill-up";
        }

        if (lastName.value == "") {
            isValid = false;
            lnameErr.innerHTML = "❗Must be fill-up";
        }

        if (email.value == "") {
            isValid = false;
            emailErr.innerHTML = "❗Must be fill-up";
        }

        if (password.value == "") {
            isValid = false;
            passErr.innerHTML = "❗Must be fill-up";
        }
        if (isValid) {
            const userInfo = {
                fName: firstName.value,
                lName: lastName.value,
                email: email.value,
                pass: password.value
            }

            console.log(userInfo);

            firstName.value = "";
            lastName.value = "";
            email.value = "";
            password.value = "";

            fnameErr.innerHTML = "";
            lnameErr.innerHTML = "";
            emailErr.innerHTML = "";
            passErr.innerHTML = "";
        }
    }
    return;
}
