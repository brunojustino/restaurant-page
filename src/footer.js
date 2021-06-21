// let f = ` <div class= "footer">

// </div>
// `
let footerDiv =  document.createElement("div")
footerDiv.className = "footer"
footerDiv.innerHTML =`<div class='left'>
<ul>
    <li>drinkcachaca@cachaca.com</li>
    <li>(55) 81 123-456-789</li>
    <li>Br 101, km 10, Recife-PE, Brazil</li>
    <li>Made by <i>Bruno Justino</i>, No Rights Reserved.</li>
</ul>

</div>
<div class='right'>
<div class='social-media'>
<h4>Social Media</h4>
<div class social-media-icons>
    <ul>
        <li><a href="https://github.com/brunojustino/" target="_blank"><i class='fab fa-2x fa-github-square'></i></a></li>
        <li><a href="https://www.instagram.com/brunojustino1/" target="_blank"><i class='fab fa-2x fa-instagram-square'></i></a></li>
    </ul>
</div>
</div>
</div>`

export const footer = () => {
    return footerDiv
  };