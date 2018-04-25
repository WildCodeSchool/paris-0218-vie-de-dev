export const newPosts = (post) => {
  const idYes = `yesVote_${post.id}`
  const idSalty = `saltyVote_${post.id}`
  const idBad = `yesVote_${post.id}`
  let idYesCompteur = `yesCompt_${post.id}`
  let idSaltyCompteur = `saltyCompt_${post.id}`
  let idBadCompteur = `badCompt_${post.id}`

  return `
    <div class='divposts'>
      <h4>VDD</h4>
      <p>Home/user-VDD<span class="blink">&#9608;</span></p>
      <p>${post.content}</p>
    </div>
    <div class='boutons'>
      <button class="yesVote yesBtn" id=${idYes}>YES</button>
      <button class="saltyVote saltyBtn" id=${idSalty}>SALTY</button>
      <button class="badVote badBtn" id=${idBad}>BAD</button>
    </div>
    <div class='votes'>
      <p class="compteur" id=${idYesCompteur}>${post.yes}</p>
      <p class="compteur" id=${idSaltyCompteur}>${post.salty}</p>
      <p class="compteur" id=${idBadCompteur}>${post.bad}</p></div>
    </div>
    
    `
}

