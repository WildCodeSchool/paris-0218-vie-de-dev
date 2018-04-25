import {newPosts} from '../modules/posts.js'
import {backgroundChange} from '../modules/backgroundChange.js'
import {boutonNews} from '../modules/boutonNews.js'
import {boutonRandom} from '../modules/boutonRandom.js'
import {boutonsYBS} from '../modules/boutonYesBadSalty.js'
import {createVoteYes} from '../modules/createVote.js'
import {createVoteSalty} from '../modules/createVoteSalty.js'
import {createVoteBad} from '../modules/createVoteBad.js'
import {createSearch} from '../modules/createSearch.js'
import {menuburger} from '../modules/menuburger.js'

window.fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    posts.sort((a, b) => {
      return (new Date(b.createAt) - new Date(a.createAt))
    })
    const postElements = document.getElementById('posts')
    postElements.innerHTML = posts.map(newPosts).join('')
    createVoteYes()
    createVoteSalty()
    createVoteBad()
    createSearch('search_btn')
    createSearch('search_btn_tel')
  })
backgroundChange()
boutonNews()
boutonRandom()
boutonsYBS()
menuburger()
