import { productsContent } from './products'
import vera from './img/vera.jpg'

let mainDiv = document.createElement("div")
mainDiv.className = "main"
let section1 = `
<div class='main-img'>
    <img src='${vera}' alt='Bar Cachaça'>
</div>
<div class='main-text'>
    <p>
        <h2>Welcome to Cachaça Bar.</h2>
    </p>
    <p>
    Cachaça bar was founded in 1537 as soon as cana-de-açucar "wine" was discovered. Since then we've been making people <i>happy</i> and bringing all nations together
    </p>
    <p>
    Navigate throught our website to find more about us
    </p>
</div>
 `
 mainDiv.innerHTML = section1
 

 let testmonialsDiv = document.createElement("div")
 testmonialsDiv.className = "testmonials"
 testmonialsDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/DJNw3sqSuIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

let contactDiv = document.createElement("div")
contactDiv.className = "contact"
contactDiv.innerHTML = "contact"

export const middle = () => {
    return mainDiv
  };

export const about = () => {
    return mainDiv
  }
export const products = () => {
    return productsContent()
  }
export const testmonials = () => {
    return testmonialsDiv
  }
export const contact = () => {
    return contactDiv
  }

