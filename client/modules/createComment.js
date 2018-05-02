export const createCommentElement = comment => `
  <div class='comment_form'>
    <p> Home/${comment.name}: </p>
    <p>${comment.content}</p>
  </div>
`
