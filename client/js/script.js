import {newPosts} from '../modules/posts.js'

window.fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    const postsElements = document.getElementById('posts')
    postsElements.innerHTML = posts.map(newPosts).join('')
    // console.log(posts.map(newPosts).reverse().join(''))
  })
  newsButton.addEventListener('click' , () =>{
    window.fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => {
      const buttonElements = document.getElementById('posts')
      buttonElements.innerHTML = posts.map(newPosts).reverse().join('')
    })
  })