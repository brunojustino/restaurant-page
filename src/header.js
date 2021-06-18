import "@fortawesome/fontawesome-free/js/all.js"

function ce(s){
    return document.createElement(s)
}

// let header = `
// <div class="header">
// <ul>
//     <li class='icon'><a id='main' class='links link' href=''><i class='fas fa-2x fa-wine-glass-alt'></i>Cachaça</a></li>
//     <li class='hvr-glow'><a id='about' class='links link glow' href=''>About</a></li>
//     <li class='hvr-glow'><a id='products' class='links link glow' href=''>Products</a></li>
//     <li class='hvr-glow'><a id='testmonials' class='links link glow' href=''>Testmonials</a></li>
//     <li class='hvr-glow'><a id='contact' class='links link glow' href=''>Contact</a></li>
// </ul>
// </div> `

let headerDiv =  ce("div")
headerDiv.className = "header"
let ul = ce("ul")

// icon link
let icon = ce("li")
icon.className = "icon"
let iconA = ce("a")
iconA.id = "main"
iconA.className = "links link"
let iWine = ce("i")
iWine.className = "fas fa-2x fa-wine-glass-alt"
iconA.appendChild(iWine)
let p = ce("p")
p.textContent = "Cachaça"
iconA.appendChild(p)
icon.appendChild(iconA)
ul.appendChild(icon)

//about link
function createLink(name){
    let li = ce("li")
    li.className = "hvr-glow"
    let a = ce("a")
    a.id = name
    a.className = "links link glow"
    a.textContent = name
    li.appendChild(a)
    return li
}

ul.appendChild(createLink("about"))
ul.appendChild(createLink("Products"))
ul.appendChild(createLink("Testimonials"))
ul.appendChild(createLink("Contact"))

headerDiv.appendChild(ul)

export const header = () => {
    return headerDiv
  };