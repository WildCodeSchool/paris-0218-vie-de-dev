import {newPosts} from '../modules/posts.js'
export const createSearch = (idSearch) => {
  document.getElementById(idSearch).addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      const recherche = document.getElementById(idSearch).value.toLowerCase()
      window.fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(posts => {
          const reg = new RegExp(recherche, 'g')
          let postTri = posts.filter(post => (post.content.toLowerCase()).match(reg))
          const postElements = document.getElementById('posts')
          postElements.innerHTML = postTri.map(newPosts).join('')
        })
    }
  })
}
