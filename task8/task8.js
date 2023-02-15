var img = document.querySelector('.img')

img.addEventListener("click", () => {
    let currentWidth = img.clientWidth
    let currentHeight = img.clientHeight

    img.style.width = (currentWidth + 5) + "px";
    img.style.height = (currentHeight + 5) + "px";

    while (currentWidth < 1000){

    }
})