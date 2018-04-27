import { createCommentElement } from '../modules/createComment.js'
import {newPosts} from '../modules/posts.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/postComment/${id}`)
  .then(res => res.json())
  .then(post => {
    const postElement = document.getElementById('postDetail')
  	postElement.innerHTML = post.map(newPosts).join('')
  	console.log('post res :', post)
  	
  })


fetch(`http://localhost:3000/comments/${id}`)
  .then(res => res.json())
  .then(comments => {
    const commentElement = document.getElementById('comment')
  	commentElement.innerHTML = comments.map(createCommentElement).join('')
  	console.log('comment res :', comments)
  	
  })
