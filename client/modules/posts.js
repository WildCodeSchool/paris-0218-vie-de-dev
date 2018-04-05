export const newPosts = (post) => {
  return `
    <div class='divposts'>
      <h4>VDD</h4>
      <p>Home/user-VDD:</p>
      <p>${post.content}</p>
    </div>
    <div class='boutons'>
      <button>YES</button>
      <button>SALTY</button>
      <button>BAD</button>
    </div>
    <div class='votes'>
      <p class="compteur">${post.yesVotes.length}</p>
      <p class="compteur">${post.saltyVotes.length}</p>
      <p class="compteur">${post.badVotes.length}</p></div>
    </div>
    `
}
