export const createVoteBad = () => {
  window.fetch('http://localhost:3000/', { 'credentials': 'include' })
    .then(user => user.json())
    .then(user => {
      if (user.id) {
        const URLSearchParams = window.URLSearchParams
        let userConnect = user.id // utilisateur connecté
        const badVoteClass = document.getElementsByClassName('badVote')
        for (let butt of badVoteClass) {
          butt.addEventListener('click', (e) => {
            // recupération id post
            console.log('idPost : ' + e.target.id)
            let idPost = (e.target.id).split('_')[1]
            // envoi au serveur 'http://localhost:3000/postVote/:voteType'
            window.fetch('http://localhost:3000/post/vote/badVotes', {
              method: 'post',
              body: new URLSearchParams(
                { id: idPost,
                  user: userConnect })
            })
              .then(res => res.json())
              .then(res => {
                const badCompteur = document.getElementById(`badCompt_${idPost}`)
                badCompteur.textContent = res[0].nbVotes
              })
          })
        }
      }
    })
}
