let styleSelectBack = document.querySelector('.colorSelection');

let optionBackGround = document.querySelectorAll('.backgroundOption');
    optionBackGround.forEach((item) => {
        item.style.backgroundColor = item.value;
        item.style.color = "white";
    })

function selectColor() {
    let swatch = document.querySelector("#swatch");
    swatch.style.backgroundColor = styleSelectBack.value;
};