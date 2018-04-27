import { createCommentElement } from '../modules/createComment.js'


const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/comments/${id}`)
  .then(res => res.json())
  .then(comments => {
    const commentElement = document.getElementById('comment')
  	commentElement.innerHTML = comments.map(createCommentElement).join('')
  	console.log('comment res :', comments)
  	
  })
