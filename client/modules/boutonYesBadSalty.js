import {newPosts} from '../modules/posts.js'
export const boutonsYBS = () => {
  const sortByTypes = type => {
    window.fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
        let postSort = posts.filter((post) => {
          return post[type] > 0
        })
        postSort = postSort.sort((a, b) => {
          return (b[type] - a[type])
        })
        const postsElements = document.getElementById('posts')
        postsElements.innerHTML = postSort.map(newPosts).join('')
      })
  }

  const topSortButton = document.getElementById('top_sort')
  topSortButton.addEventListener('click', () => sortByTypes('yes'))

  const saltySortButton = document.getElementById('salty_sort')
  saltySortButton.addEventListener('click', () => sortByTypes('salty'))

  const badSortButton = document.getElementById('bad_sort')
  badSortButton.addEventListener('click', () => sortByTypes('bad'))
}
