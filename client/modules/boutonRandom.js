import {newPosts} from '../modules/posts.js'
export const boutonRandom = () => {
  const randomBtn = document.getElementById('random_btn')

  randomBtn.addEventListener('click', () => { // Au click du bouton random
    const shuffleTab = [] // tableau qui va stocker le tableau de posts mélangé
    window.fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
        const maxSize = posts.length
        for (let i = 0; i < maxSize; i++) {
          let rand = Math.floor(Math.random() * posts.length) // génération aléatoire de l'index du tableau posts
          shuffleTab.push(posts[rand]) // on stock dans notre tableau suffleTab le post du tableau posts situé à l'index généré aléatoirement
          posts.splice(rand, 1) // on supprime le post du tableau posts situé à l'index généré aléatoirement afin d'éviter toute redondance
        }
        const postsElements = document.getElementById('posts')
        postsElements.innerHTML = shuffleTab.map(newPosts).join('')
      })
  })
}
