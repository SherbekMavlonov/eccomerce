
const accordionItems = document.querySelectorAll(".accordion-item")
const categoriesBox = document.querySelector("#categories-box")

Array.from(Array(accordionItems.length).keys()).map((item) => {
    const [ button , body] = accordionItems[item].children
    button.addEventListener("click" , () => {
        if(body.hasAttribute("hidden")){
            body.removeAttribute("hidden")
            button.lastElementChild.style.transform = "rotateX(180deg)";
        }else{
            body.setAttribute("hidden" , "")
            button.lastElementChild.style.transform = "rotateX(0deg)";
        }
    })
})

