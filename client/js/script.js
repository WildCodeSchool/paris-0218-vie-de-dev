import {newPosts} from '../modules/posts.js'

window.fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    const postsElements = document.getElementById('posts')
    postsElements.innerHTML = posts.map(newPosts).join('')
  })

// au clic sur topSort
const topSortButton = document.getElementById('top_sort')

topSortButton.addEventListener('click', (e) => {
  window.fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => {
      const postsElements = document.getElementById('posts')
      postsElements.innerHTML = posts.map(newPosts).join('')
    })
})
