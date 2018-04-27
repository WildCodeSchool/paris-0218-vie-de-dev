import { createCommentElement } from '../modules/createComment.js'
import {newPosts} from '../modules/posts.js'
import {createVoteYes} from '../modules/createVote.js'
import {createVoteSalty} from '../modules/createVoteSalty.js'
import {createVoteBad} from '../modules/createVoteBad.js'
import {createSearch} from '../modules/createSearch.js'

/* global URLSearchParams */

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

window.fetch(`http://localhost:3000/postComment/${id}`)
  .then(res => res.json())
  .then(post => {
    const postElement = document.getElementById('post_detail')
    postElement.innerHTML = post.map(newPosts).join('')
    console.log('post res :', post)
    createVoteYes()
    createVoteSalty()
    createVoteBad()
    createSearch('search_btn')
    createSearch('search_btn_tel')
  })

window.fetch(`http://localhost:3000/comments/${id}`)
  .then(res => res.json())
  .then(comments => {
    const commentElement = document.getElementById('comment')
    commentElement.innerHTML = comments.map(createCommentElement).join('')
    console.log('comment res :', comments)
  })

 /* global URLSearchParams */
document.getElementById('add_com').addEventListener('submit', event => {
  event.preventDefault()

  const content = document.getElementById('new_com').value
  console.log(content)
  window.fetch('http://localhost:3000/addComments', {
    method: 'post',
    body: new URLSearchParams({
      userId: 4,
      postId: id,
      content: content
    })
  })
    .then(res => console.log(res.status))
})

