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
