export const createVoteYes = () => {
  let userConnect = 8 // utilisateur connecté fictif
  const yesVoteClass = document.getElementsByClassName('yesVote')
  for (let butt of yesVoteClass) {
    butt.addEventListener('click', (e) => {
      // recupération id post
      console.log('idPost : ' + e.target.id)
      let idPost = (e.target.id).split('_')[1]
      // envoi au serveur 'http://localhost:3000/postVote/:voteType'
      window.fetch('http://localhost:3000/postVote/yesVotes', {
        method: 'post',
        body: new URLSearchParams(
          { id: idPost,
            user: userConnect })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res) // reponse serveur : renvoi les données du mock modifié
        })
    })
  }
}
