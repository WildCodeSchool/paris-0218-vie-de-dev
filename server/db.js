const mysql = require('mysql2/promise')


const co = mysql.createConnection ({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'VDD'
})

const exec = async(query,params) => {
	const connection = await co
	const result = await connection.execute(query,params)
	return result[0]
}


//requete SQL pour ajouter un post
const addPost = (params) => 
  exec('INSERT INTO post (userId, content) VALUES (?, ?)',
    [params.userId, params.content])

//test pour savoir si addPost fonctionne !
/*addPost({userId: 6, content: 'blllllllllllllla'})
  .then(result => console.log('result:', result))
  .catch(console.error)*/



module.exports = {
	addPost
}
