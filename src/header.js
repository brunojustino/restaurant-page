import "@fortawesome/fontawesome-free/js/all.js"
import { createLink, ce } from './helpers'


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


ul.appendChild(createLink("about"))
ul.appendChild(createLink("products"))
ul.appendChild(createLink("testmonials"))
ul.appendChild(createLink("contact"))

headerDiv.appendChild(ul)

export const header = () => {
    return headerDiv
  };