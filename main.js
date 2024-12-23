import './assets/css/style.css'
import { createView } from './src/utils/createView'
// Y VER README.MD

let main = document.getElementById('app')
let { navElement, mainElement } = createView()
main.appendChild(navElement)
main.appendChild(mainElement)
// main.innerHTML = `<div id="test-container"> <button id="testBtn"> test </button> </div>`
  
//LISTENERs  
  
let toggleBtn = document.getElementById('toggleIcon')
toggleBtn.addEventListener('click', () => {
  let nav = document.getElementById('nav-list')
  if(nav.className === 'nav-items'){
    nav.className += '-responsive'
    toggleBtn.style.display = "none"
    let darkOverLay = document.getElementById('overlay')
    darkOverLay.style.display = 'block'
    let closeNavIcon = document.getElementById('closeNavIcon')
    closeNavIcon.style.display = 'block'
    closeNavIcon.addEventListener('click', ()=>{
      nav.className = 'nav-items'
      toggleBtn.style.display = 'block'
      closeNavIcon.style.display = 'none'
      darkOverLay.style.display = 'none'
    })
  }else{
    nav.className = 'nav-items'
  }  
})


