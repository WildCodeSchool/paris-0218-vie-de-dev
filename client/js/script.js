import {newPosts} from '../modules/posts.js'

window.fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    const postsElements = document.getElementById('posts')
    postsElements.innerHTML = posts.map(newPosts).join('')
  })

// RandomButton

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

// BoutonTop

const topSortButton = document.getElementById('top_sort')

topSortButton.addEventListener('click', (e) => {
  window.fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => {
      let postSort = posts.filter((post) => {
        return post.yesVotes.length > 0
      })
      postSort = postSort.sort((a, b) => {
        return (b.yesVotes.length - a.yesVotes.length)
      })
      const postsElements = document.getElementById('posts')
      postsElements.innerHTML = postSort.map(newPosts).join('')
    })
})

// Bad Button
const badSortButton = document.getElementById('bad_sort')

badSortButton.addEventListener('click', (e) => {
  window.fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => {
      let postSort = posts.filter((post) => {
        return post.badVotes.length > 0
      })
      postSort = postSort.sort((a, b) => {
        return (b.badVotes.length - a.badVotes.length)
      })
      const postsElements = document.getElementById('posts')
      postsElements.innerHTML = postSort.map(newPosts).join('')
    })

})

// BoutonSalty

const saltySortButton = document.getElementById('salty_sort')

saltySortButton.addEventListener('click', (e) => {
  window.fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => {
      let postSort2 = posts.filter((post) => {
        return post.saltyVotes.length > 0
      })
      postSort2 = postSort2.sort((a, b) => {
        return (b.saltyVotes.length - a.saltyVotes.length)
      })
      const postElements = document.getElementById('posts')
      postElements.innerHTML = postSort2.map(newPosts).join('')
    })
})


