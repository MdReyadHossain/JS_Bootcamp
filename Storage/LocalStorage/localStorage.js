// localStorage can be set at highest 10mb
// value will set as permanent till remove by user or system

const userName = document.getElementById("user-name");
const storageUserName = localStorage.getItem("userName");
userName.innerHTML = storageUserName;

const remove = document.getElementById("remove");
remove.addEventListener("click", () => {
    localStorage.removeItem("userName");
    userName.innerHTML = localStorage.getItem("userName");
})

function storage() {
    const name = document.getElementById("name");
    let isValid = true;
    document.addEventListener("submit", formHandler);
    function formHandler(event) {
        event.preventDefault();
        if (name.value == "") {
            console.log("Name should not be empty!");
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem("userName", name.value);
            userName.innerHTML = localStorage.getItem("userName");
        }
    }
    return;
}