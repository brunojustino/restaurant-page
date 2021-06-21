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


let mainLink = document.getElementById("main")
mainLink.addEventListener("click", () => {
    let mainPageContent = middle()
    currentPage = pageChange(content, mainPageContent, currentPage)
})

let aboutLink =  document.getElementById("about")
aboutLink.addEventListener("click", () => {
    let aboutPage = about()
    currentPage = pageChange(content, aboutPage, currentPage)
})

let productsLink = document.getElementById("products")
productsLink.addEventListener("click", () => {
    let productsPage = products()
    currentPage = pageChange(content, productsPage, currentPage)
})

let testmonialsLink = document.getElementById("testmonials")
testmonialsLink.addEventListener("click", () => {
    let testmonialsPage = testmonials()
    currentPage = pageChange(content, testmonialsPage, currentPage)
})

let contactLink = document.getElementById("contact")
contactLink.addEventListener("click", () => {
    let contactPage = contact()
    currentPage = pageChange(content, contactPage, currentPage)
})
