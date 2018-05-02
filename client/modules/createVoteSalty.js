export const createVoteSalty = () => {
  window.fetch('http://localhost:3000/', { 'credentials': 'include' })
    .then(user => user.json())
    .then(user => {
      if (user.id) {
        let userConnect = user.id // utilisateur connecté fictif
        const saltyVoteClass = document.getElementsByClassName('saltyVote')
        for (let butt of saltyVoteClass) {
          butt.addEventListener('click', (e) => {
            // recupération id post
            console.log('idPost : ' + e.target.id)
            let idPost = (e.target.id).split('_')[1]
            // envoi au serveur 'http://localhost:3000/postVote/:voteType'
            window.fetch('http://localhost:3000/post/vote/saltyVotes', {
              method: 'post',
              body: new URLSearchParams(
                { id: idPost,
                  user: userConnect })
            })
              .then(res => res.json())
              .then(res => {
                const saltyCompteur = document.getElementById(`saltyCompt_${idPost}`)
                saltyCompteur.textContent = res[0].nbVotes
              })
          })
        }
      }
    })
}
