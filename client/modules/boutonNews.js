import {newPosts} from '../modules/posts.js'
export const boutonNews = () => {
  const newsBtn = document.getElementById('news_sort')
  newsBtn.addEventListener('click', () => {

    window.fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
      	  	console.log(posts)
        let postSort = posts.sort((a, b) => {
          return (b.createdAt - a.createdAt)
        })
        const buttonElements = document.getElementById('posts')
        buttonElements.innerHTML = posts.map(newPosts).join('')
      })
  })
}
