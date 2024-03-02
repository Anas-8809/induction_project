let mode = document.querySelector(".mode");
let body = document.querySelector("body");
let curr_mode="light";
mode.addEventListener("click", () => {
    if(curr_mode==="light"){
        curr_mode="night";
        body.style.backgroundColor = "#212529";
        body.style.color = "#f0f8ff";
    }
    else{
        curr_mode="light";
        body.style.backgroundColor = "#f0f8ff";
        body.style.color = "#212529";
    }
})