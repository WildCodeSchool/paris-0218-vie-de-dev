export const createVoteYes = () => {
  /* global URLSearchParams */
  let userConnect = 1 // utilisateur connecté fictif
  const yesVoteClass = document.getElementsByClassName('yesVote')

  for (let butt of yesVoteClass) {
    butt.addEventListener('click', (e) => {
      // recupération id post
      console.log('idPost : ' + e.target.id)
      let idPost = (e.target.id).split('_')[1]
      // envoi au serveur 'http://localhost:3000/postVote/:voteType'
      window.fetch('http://localhost:3000/post/vote/yesVotes', {
        method: 'post',
        body: new URLSearchParams(
          { id: idPost,
            user: userConnect })
      })
        .then(res => res.json())
        .then(res => {
          console.log("response createVOte", res[0].nbVotes) // res.idreponse serveur : renvoi les données du mock modifié
          const yesCompteur = document.getElementById(`yesCompt_${idPost}`)
          yesCompteur.textContent = res[0].nbVotes
        })
    })
  }
}
