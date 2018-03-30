import {newPosts} from '../modules/posts.js'

fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    const postsElements = document.getElementById('posts')
    postsElements.innerHTML = posts.map(newPosts).join('')
})
