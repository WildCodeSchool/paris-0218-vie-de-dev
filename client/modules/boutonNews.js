import {newPosts} from '../modules/posts.js'
export const boutonNews = () => {
  const newsBtn = document.getElementById('news_sort')
  newsBtn.addEventListener('click', () => {
    window.fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
        const buttonElements = document.getElementById('posts')
        buttonElements.innerHTML = posts.map(newPosts).reverse().join('')
      })
  })
}
