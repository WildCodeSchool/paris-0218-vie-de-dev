import {menuburger} from '../modules/menuburger.js'
import {modalLogin} from '../modules/modalLogin.js'
import {authentification} from '../modules/authentification.js'

/* global URLSearchParams */
document.getElementById('add_post').addEventListener('submit', event => {
  event.preventDefault()

  const content = document.getElementById('new_post').value
  console.log(content)
  window.fetch('http://localhost:3000/', {credentials: 'include'})
    .then(res => res.json())
    .then(res => {
      console.log(res)
      window.fetch('http://localhost:3000/post/soumettre', {
        method: 'post',

        body: new URLSearchParams({
          userId: res.id,
          content: content
        })
      })
        .then(res => window.location.replace('http://localhost:8080/'))
    })
})
menuburger()
modalLogin()
authentification()