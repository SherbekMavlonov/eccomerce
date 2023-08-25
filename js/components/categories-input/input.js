
export default function Categories({categoriesName ,href , itemCount }){
    const div = document.createElement("div")
    const input = document.createElement("input")
    const p = document.createElement("p")
    const span = document.createElement("span")
    div.classList.add("categories-item")
    input.type = "radio"
    input.setAttribute("urlName" , href)
    input.setAttribute("name" , "categories")
    p.textContent = categoriesName
    span.textContent = `(${itemCount})`
    div.appendChild(input)
    div.appendChild(p)
    div.appendChild(span)
    return div
}