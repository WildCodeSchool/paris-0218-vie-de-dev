document.getElementById('add_post').addEventListener('submit', event => {
  event.preventDefault()
  const content = document.getElementById('new_post').value

  window.fetch('http://localhost:3000/posts', {
    method: 'post',
    body: JSON.stringify({
      content: content
    })
  })
})
