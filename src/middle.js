
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

export const middle = () => {
    return mainDiv
  };

export const about = () => {

  }

