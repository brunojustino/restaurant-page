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

let mainPageContent = middle()
let mainLink = document.getElementById("main")
mainLink.addEventListener("click", () => {
    currentPage = pageChange(content, mainPageContent, currentPage)
})

let aboutPage = about()
let aboutLink =  document.getElementById("about")
aboutLink.addEventListener("click", () => {
    currentPage = pageChange(content, aboutPage, currentPage)
})

let productsPage = products()
let productsLink = document.getElementById("products")
productsLink.addEventListener("click", () => {
    currentPage = pageChange(content, productsPage, currentPage)
})

let testmonialsPage = testmonials()
let testmonialsLink = document.getElementById("testmonials")
testmonialsLink.addEventListener("click", () => {
    currentPage = pageChange(content, testmonialsPage, currentPage)
})

let contactPage = contact()
let contactLink = document.getElementById("contact")
contactLink.addEventListener("click", () => {
    currentPage = pageChange(content, contactPage, currentPage)
})
