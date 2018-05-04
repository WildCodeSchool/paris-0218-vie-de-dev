export const newPosts = (post) => {
  const idYesCompteur = `yesCompt_${post.id}`
  const idSaltyCompteur = `saltyCompt_${post.id}`
  const idBadCompteur = `badCompt_${post.id}`
  const idCommitCompteur = `commitCompteur_${post.id}`

  return `
    <div class='divposts'>
      <h4 class='line'>VDD</h4>
      <p>Home/${post.name}-VDD<span class="blink">&#9608;</span></p>
      <p>${post.content}</p>
    </div>
    <div class='boutons'>
      <button data-type="yes" data-post-id=${post.id} class="yesVote yesBtn">YES</button>
      <button data-type="salty" data-post-id=${post.id} class="saltyVote saltyBtn">SALTY</button>
      <button data-type="bad" data-post-id=${post.id} class="badVote badBtn">BAD</button>
      <a href="../comments.html?id=${post.id}">
        <button class="commitBtn">COMMIT</button>
      </a>
    </div>
    <div class='votes'>
      <p class="compteur" id=${idYesCompteur}>${post.yes || 0}</p>
      <p class="compteur" id=${idSaltyCompteur}>${post.salty || 0}</p>
      <p class="compteur" id=${idBadCompteur}>${post.bad || 0}</p>
      <p class="compteurCommit" id=${idCommitCompteur}>${post.commit || 0}</p></div>
    </div>

    `
}
