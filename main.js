const box = document.getElementsByClassName("child")[0];

document.getElementById("child-position").addEventListener("change", function (event) {
    console.log(event.target.value);
    box.style.position = event.target.value;

    if (event.target.value === "sticky") {
        Array.from(document.getElementsByClassName("parent"))[0].style.height = "100vh";
    } else {
        Array.from(document.getElementsByClassName("parent"))[0].style.height = "inherit";
    }

})

Array.from(document.getElementsByClassName("child-position-input")).forEach(element => {
    element.addEventListener("change", function (event) {
        const positionPro = event.target.dataset.position
        const positionVal = event.target.value;
        console.log(positionPro + " : " + positionVal)
        if (positionVal !== "") {
            box.style[positionPro] = positionVal
        } else {
            box.style[positionPro] = "unset";
        }
    })
});