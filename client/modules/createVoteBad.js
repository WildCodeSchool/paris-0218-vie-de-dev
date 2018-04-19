export const createVoteBad = () => {
  /* global URLSearchParams */
  let userConnect = 12 // utilisateur connecté fictif
  const badVoteClass = document.getElementsByClassName('badVote')

  for (let butt of badVoteClass) {
    butt.addEventListener('click', (e) => {
      // recupération id post
      console.log('idPost : ' + e.target.id)
      let idPost = (e.target.id).split('_')[1]
      // envoi au serveur 'http://localhost:3000/postVote/:voteType'
      window.fetch('http://localhost:3000/postVote/badVotes', {
        method: 'post',
        body: new URLSearchParams(
          { id: idPost,
            user: userConnect })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res) // reponse serveur : renvoi les données du mock modifié
          const badCompteur = document.getElementById(`badCompt_${res.id}`)
          badCompteur.textContent = res.badVotes.length
        })
    })
  }
}
