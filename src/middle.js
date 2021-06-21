
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
 productsDiv.innerHTML = `<div class="wrapper">
 <ul class="product__list">
 <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
       <div class="product__stock">two-for-one</div>
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   
   
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   
   
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   
   
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   
   
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/236798/pexels-photo-236798.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/5928/salad-healthy-diet-spinach.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
   
   <li class="product__item">
   <a href="#">
     <div class="product__img">
     <img src="https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
   </div>
   </a>
   <div class="product__content">
     <h4 class="product__title">Lorem, ipsum dolor.</h4>
     <p class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="product__info">
       <div class="product__weight">300 gm</div>
     <div class="product__price">500 &#8381;</div>
       </div>
   </div>
   <div class="product__btn">
     <a href="" class="btn__more btn">More</a>
     <a href="" class="btn__cart btn">Add to cart</a>
   </div>
 </li>
</ul>
</div>`

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
    return aboutDiv
  }
export const products = () => {
    return productsDiv
  }
export const testmonials = () => {
    return testmonialsDiv
  }
export const contact = () => {
    return contactDiv
  }

