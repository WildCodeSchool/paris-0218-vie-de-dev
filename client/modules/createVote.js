export const createVoteYes = () => {
  /* global URLSearchParams */
  window.fetch('http://localhost:3000/', { 'credentials': 'include' })
    .then(user => user.json())
    .then(user => {
      if (user.id) {
        let userConnect = user.id // utilisateur connecté
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
                const yesCompteur = document.getElementById(`yesCompt_${idPost}`)
                yesCompteur.textContent = res[0].nbVotes
              })
          })
        }
      }
    })
}
