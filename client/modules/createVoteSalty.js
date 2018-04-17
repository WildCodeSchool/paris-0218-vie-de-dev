export const createVoteSalty = () => {
  /* global URLSearchParams */
  let userConnect = 12 // utilisateur connecté fictif
  const saltyVoteClass = document.getElementsByClassName('saltyVote')

  for (let butt of saltyVoteClass) {
    butt.addEventListener('click', (e) => {
      // recupération id post
      console.log('idPost : ' + e.target.id)
      let idPost = (e.target.id).split('_')[1]
      // envoi au serveur 'http://localhost:3000/postVote/:voteType'
      window.fetch('http://localhost:3000/postVote/saltyVotes', {
        method: 'post',
        body: new URLSearchParams(
          { id: idPost,
            user: userConnect })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res) // reponse serveur : renvoi les données du mock modifié
          const saltyCompteur = document.getElementById(`saltyCompt_${res.id}`)
          saltyCompteur.textContent = res.saltyVotes.length
        })
    })
  }
}
