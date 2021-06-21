
let mainDiv = document.createElement("div")
mainDiv.className = "main"
let section1 = `
<div class='main-img'>
    <img src='https://pbs.twimg.com/media/CvVrpD2WAAAFenI.jpg' alt='Bar Cachaça'>
</div>
<div class='main-text'>
    <p>
        Welcome to Cachaça Bar.
    </p>
</div>
 `
 mainDiv.innerHTML = section1
 
 let aboutDiv = document.createElement("div")
 aboutDiv.className = "about"
 aboutDiv.innerHTML = "about page"

 let productsDiv = document.createElement("div")
 productsDiv.className = "products"
 productsDiv.innerHTML = "products page"


export const middle = () => {
    return mainDiv
  };

export const about = () => {
    return aboutDiv
  }
export const products = () => {
    return productsDiv
  }
export const testmonials = () => {
    return aboutDiv
  }
export const contact = () => {
    return aboutDiv
  }

