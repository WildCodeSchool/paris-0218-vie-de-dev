import {newPosts} from '../modules/posts.js'
import {boutonNews} from '../modules/boutonNews.js'
import {boutonRandom} from '../modules/boutonRandom.js'
import {boutonsYBS} from '../modules/boutonYesBadSalty.js'
import {createVoteYes} from '../modules/createVote.js'
import {createVoteSalty} from '../modules/createVoteSalty.js'
import {createVoteBad} from '../modules/createVoteBad.js'

window.fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    let postSort = posts.sort((a, b) => {
      return (b.createdAt - a.createdAt)
    })
    const postElements = document.getElementById('posts')
    postElements.innerHTML = postSort.map(newPosts).join('')
    createVoteYes()
    createVoteSalty()
    createVoteBad()
  })
boutonNews()
boutonRandom()
boutonsYBS()
