// chage event
function changeInput(event) {
    console.log(event.type); // show addEventListener type: change
    console.log(event.target.id); // show id of element
    console.log(event.target.name); // show name of element
    console.log(event.target.value); // show value of element
    document.getElementById("Welcome").innerHTML = "<h2>Hello <i>" + event.target.value + "</i>, <br>Welcome to our website</h2>";
}

let nameInput = document.getElementById("nametxt");
//                        event_type   function
nameInput.addEventListener("change", changeInput);

// for checkbox
let i = 0;
let skill = new Array();
function skillHandler(event) {
    if(i == 0) {
        document.getElementById("show").innerHTML = "<b>NULL </b>";
    }
    
    if(event.target.checked) {
        skill[i] = event.target.value;
        document.getElementById("show").innerHTML = skill;
        i++;
    }
    else if(!event.target.checked) {
        for(let j = 0; j < skill.length; j++) {
            if(event.target.value == skill[j]) {
                skill.splice(j, 1);
                break;
            }
        }
        document.getElementById("show").innerHTML = skill;
        i--;
    }
}

let progress = document.querySelectorAll("input[name=web]");
Array.from(progress).map((skill) => {
    skill.addEventListener("change", skillHandler);
})


// for select 
function sectorHandler(event) {
    let show = document.getElementById("show-sector");
    show.innerHTML = event.target.value;
}

let sector = document.getElementById("sector");
sector.addEventListener("change", sectorHandler);
