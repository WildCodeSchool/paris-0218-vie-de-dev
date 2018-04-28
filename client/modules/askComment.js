import { createCommentElement } from '../modules/createComment.js'
export const askComment = (idPost) => {
	window.fetch(`http://localhost:3000/comments/${idPost}`)
	  .then(res => res.json())
	  .then(comments => {
	    const commentElement = document.getElementById('comment')
	    commentElement.innerHTML = comments.map(createCommentElement).join('')
	    console.log('comment res :', comments)
	  })
}
