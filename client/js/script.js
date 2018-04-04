import {newPosts} from '../modules/posts.js'

window.fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    const postsElements = document.getElementById('posts')
    postsElements.innerHTML = posts.map(newPosts).join('')
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

