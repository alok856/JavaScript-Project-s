let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light";//dark

modeBtn.addEventListener("mouseover", () =>{
    if (currMode=== "Light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "Light";
        body.classList.add("Light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});