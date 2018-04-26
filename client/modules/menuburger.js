import {createSearch} from '../modules/createSearch.js'
import {modalLogin} from '../modules/modalLogin.js'
export const menuburger = () => {
  let i = 0
  document.getElementById('burger').addEventListener('click', () => {
    if (i === 0) {
      document.getElementById('burger_menu').innerHTML = `
        <li><a href="#">Editer mes VDD</a></li>
         <li><a href="formulaire_post.html">Soumettre mes VDD</a></li>
        <li>
          <form action="#">
            <input type="text" id="search_btn_tel">
          </form>
        </li>
        <li><a href="#" id="signupsm">Log in</a></li>
        `
      i = 1
      createSearch('search_btn_tel')
      modalLogin()
    } else {
      document.getElementById('burger_menu').innerHTML = `
        <li class="nodisplay"><a href="#">Editer mes VDD</a></li>
        <li class="nodisplay"><a href="formulaire_post.html">Soumettre mes VDD</a></li>
        <li class="nodisplay">
          <form action="#">
             <input type="text" id="search_btn_tel2">
          </form>
        </li class="nodisplay">
        <li class="nodisplay" id="signupsm"><a href="#">Log in</a></li>
        `
      i = 0
      modalLogin()
    }
  })
}
