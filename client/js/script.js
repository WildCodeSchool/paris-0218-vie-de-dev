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
      return (b.createAt - a.createAt)
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


// test pour searchBar

document.getElementById('search_btn').addEventListener('keyup', e => {
  //console.log("test search")
  if(event.keyCode === 13){
    const recherche = document.getElementById('search_btn').value.toLowerCase()
    console.log(recherche)
    window.fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
      console.log(posts)
      const reg = new RegExp(recherche,"g")
      let postTri = posts.filter(post => (post.content.toLowerCase()).match(reg))
      const postElements = document.getElementById('posts')
      postElements.innerHTML = postTri.map(newPosts).join('')
      
    })
  }

})
