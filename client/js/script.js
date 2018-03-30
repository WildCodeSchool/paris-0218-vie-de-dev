fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    const postsElements = document.getElementById('posts')
  }
