import "./css/styles.css";
import "./css/external.css";
import "@fortawesome/fontawesome-free/js/all.js"
import { pageChange } from './helpers'
import { header } from './header'
import { footer } from './footer'
import { middle, about, products, testmonials, contact } from './middle'


let content = document.getElementById("content")

content.appendChild(header())
content.appendChild(middle())
content.appendChild(footer())

let mainPage = document.querySelector(".main")
let currentPage = mainPage
let aboutPage = about()
let productsPage = products()
let testmonialsPage = testmonials()
let contactPage = contact()



let aboutLink =  document.getElementById("about")
aboutLink.addEventListener("click", () => {
    currentPage = pageChange(content, aboutPage, currentPage)
})

let productsLink = document.getElementById("products")
productsLink.addEventListener("click", () => {
    currentPage = pageChange(content, productsPage, currentPage)
})


function renderPage(page){
    
}
