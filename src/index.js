import "./css/styles.css";
import "./css/external.css";
import "@fortawesome/fontawesome-free/js/all.js"
import { header } from './header'
import { footer } from './footer'
import { middle } from './middle'

let mainHTML, aboutHTML, productsHTML, testmonialsHTML, contactHTML = ""

let content = document.getElementById("content")


content.appendChild(header())
content.appendChild(middle())
content.appendChild(footer())

// content.innerHTML = header() + section1 + footer

// let about = document.getElementById("about")
// about.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("test")
//     let main = document.getElementsByClassName("main")
//     main.innerHTML = ""

// })

function renderPage(div){
    
}
