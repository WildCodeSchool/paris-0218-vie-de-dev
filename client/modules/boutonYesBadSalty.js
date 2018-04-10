export const boutonsYBS = () => {
  const sortByTypes = type => {
  window.fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => {
      let postSort = posts.filter((post) => {
        return post[type].length > 0
      })
      postSort = postSort.sort((a, b) => {
        return (b[type].length - a[type].length)
      })
      const postsElements = document.getElementById('posts')
      postsElements.innerHTML = postSort.map(newPosts).join('')
    })
}

topSortButton.addEventListener('click', () => sortByTypes('yesVote'))
saltySortButton.addEventListener('click', () => sortByTypes('saltyVotes'))
badSortButton.addEventListener('click', () => sortByTypes('badVotes'))
}
