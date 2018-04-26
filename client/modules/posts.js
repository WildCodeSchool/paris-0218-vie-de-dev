export const newPosts = (post) => {
  const idYes = `yesVote_${post.id}`
  const idSalty = `saltyVote_${post.id}`
  const idBad = `yesVote_${post.id}`
  const idYesCompteur = `yesCompt_${post.id}`
  const idSaltyCompteur = `saltyCompt_${post.id}`
  const idBadCompteur = `badCompt_${post.id}`
  const zeroVotes = (vote) => {
    if (post[vote] === null) {
      post[vote] = 0
      return post[vote]
    }
  }
  zeroVotes('yes')
  zeroVotes('salty')
  zeroVotes('bad')

  return `
    <div class='divposts'>
      <h4 class='line'>VDD</h4>
      <p>Home/${post.name}-VDD<span class="blink">&#9608;</span></p>
      <p>${post.content}</p>
    </div>
    <div class='boutons'>
      <button class="yesVote yesBtn" id=${idYes}>YES</button>
      <button class="saltyBtn">SALTY</button>
      <button class="badBtn">BAD</button>
      <button class="commitBtn">COMMIT</button>
    </div>
    <div class='votes'>
      <p class="compteur" id=${idYesCompteur}>${post.yes}</p>
      <p class="compteur" id=${idSaltyCompteur}>${post.salty}</p>
      <p class="compteur" id=${idBadCompteur}>${post.bad}</p></div>
    </div>    
    `
}
