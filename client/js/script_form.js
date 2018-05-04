import {menuburger} from '../modules/menuburger.js'
import {modalLogin} from '../modules/modalLogin.js'
import {authentification} from '../modules/authentification.js'
menuburger()
modalLogin()
authentification()
document.getElementById('add_post').addEventListener('submit', event => {
  event.preventDefault()
  const URLSearchParams = window.URLSearchParams
  const content = document.getElementById('new_post').value
  console.log(content)
  window.fetch('http://localhost:3000/', {credentials: 'include'})
    .then(res => res.json())
    .then(res => {
      if (res.id) {
        console.log(res)
        window.fetch('http://localhost:3000/post/soumettre', {
          method: 'post',

          body: new URLSearchParams({
            userId: res.id,
            content: content
          })
        })
          .then(res => window.location.replace('/'))
      } else {
        document.getElementById('add_post').innerHTML = `
        <textarea id="new_post" name="new_post" placeholder="Tu n'as pas le droit de poster si tu n'es pas connecté !"></textarea><br>
        <button id="bouton" type="submit">VALIDER</button>
      `
      }
    })
})
