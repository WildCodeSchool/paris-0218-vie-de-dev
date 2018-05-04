export const createVote = () => {
  /* global URLSearchParams */
  window.fetch('http://localhost:3000/', { 'credentials': 'include' })
    .then(user => user.json())
    .then(user => {
      if (!user.id) return
      const userConnect = user.id // utilisateur connecté
      const buttons = document.querySelectorAll('.boutons button')
      for (const btn of buttons) {
        btn.addEventListener('click', (e) => {
          // recupération id post
          const type = e.target.dataset.type
          const postId = e.target.dataset.postId
          // envoi au serveur 'http://localhost:3000/postVote/:voteType'
          window.fetch(`http://localhost:3000/post/vote/${type}Votes`, {
            method: 'post',
            body: new URLSearchParams({ id: postId, user: userConnect })
          })
            .then(res => res.json())
            .then(nbVotes => {
              const compteur = document.getElementById(`${type}Compt_${postId}`)
              compteur.textContent = nbVotes
            })
        })
      }
    })
}
