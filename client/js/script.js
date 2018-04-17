import {newPosts} from '../modules/posts.js'
import {boutonNews} from '../modules/boutonNews.js'
import {boutonRandom} from '../modules/boutonRandom.js'
import {boutonsYBS} from '../modules/boutonYesBadSalty.js'
import {createVoteYes} from '../modules/createVote.js'
import {createVoteSalty} from '../modules/createVoteSalty.js'

window.fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    const postsElements = document.getElementById('posts')
    postsElements.innerHTML = posts.map(newPosts).reverse().join('')
    createVoteYes()
    createVoteSalty()
  })
boutonNews()
boutonRandom()
boutonsYBS()
