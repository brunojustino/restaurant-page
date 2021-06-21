import pitu from './img/pitu.jpg'
import cana51 from './img/51.jpg'
import amansacorno from './img/amansacorno.png'
import curaveado from './img/curaveado.jpg'
import queimarosca from './img/queimarosca.jpg'
import picadura from './img/picadura.jpg'

let productsDiv = document.createElement("div")
productsDiv.className = "products"
productsDiv.innerHTML = `<div class="wrapper">
<ul class="product__list">
<li class="product__item">
  <a href="#">
    <div class="product__img">
    <img src="${pitu}" alt="Pitu">
  </div>
  </a>
  <div class="product__content">
    <h4 class="product__title">Pitu</h4>
    <p class="product__subtitle">The Best Cachaça from PE - Brazil.</p>
    <div class="product__info">
      <div class="product__weight">350ml</div>
    <div class="product__price">10 &#8381;</div>
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
    <img src="${picadura}" alt="PicaDura">
      <div class="product__stock">two-for-one</div>
  </div>
  </a>
  <div class="product__content">
    <h4 class="product__title">Pica Dura</h4>
    <p class="product__subtitle">If you having trouble "getting up" try this one.</p>
    <div class="product__info">
      <div class="product__weight">300ml</div>
    <div class="product__price">100 &#8381;</div>
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
    <img src="${amansacorno}" alt="Amansa Corno">
  </div>
  </a>
  <div class="product__content">
    <h4 class="product__title">Amansa Corno</h4>
    <p class="product__subtitle">If your cuckold not enjoying the idea, check this out.</p>
    <div class="product__info">
      <div class="product__weight">200ml</div>
    <div class="product__price">50 &#8381;</div>
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
    <img src="${cana51}" alt="51">
  </div>
  </a>
  <div class="product__content">
    <h4 class="product__title">51</h4>
    <p class="product__subtitle">Cachaça 51 a great idea. One of the oldest cachaça in the market, this is your good to go option.</p>
    <div class="product__info">
      <div class="product__weight">1L</div>
    <div class="product__price">200 &#8381;</div>
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
    <img src="${curaveado}" alt="Cura Veado">
  </div>
  </a>
  <div class="product__content">
    <h4 class="product__title">Cura Veado</h4>
    <p class="product__subtitle">If you are feeling week and got tired of being used, this is for you.</p>
    <div class="product__info">
      <div class="product__weight">750ml</div>
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
    <img src="${queimarosca}" alt="Queima Rosca">
  </div>
  </a>
  <div class="product__content">
    <h4 class="product__title">Queima Rosca</h4>
    <p class="product__subtitle">Dont have courage to get out of the closet? Two glasses and everyone will know</p>
    <div class="product__info">
      <div class="product__weight">300ml</div>
    <div class="product__price">300 &#8381;</div>
      </div>
  </div>
  <div class="product__btn">
    <a href="" class="btn__more btn">More</a>
    <a href="" class="btn__cart btn">Add to cart</a>
  </div>
</li>
  
</ul>
</div>`

export const productsContent = () => {
    return productsDiv
}