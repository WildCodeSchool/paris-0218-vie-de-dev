const mysql = require('mysql2/promise')
const co = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'VDD'
})
const exec = async (query, params) => {
  const connection = await co
  const result = await connection.execute(query, params)
  return result[0]
} /**/
const getPosts = () => exec(`
  SELECT * FROM (
    SELECT * FROM (
      SELECT * FROM (
        SELECT * FROM post
        LEFT JOIN (
          SELECT postId AS postIdyes, COUNT(userId) AS yes
          FROM yesVotes
          GROUP BY postId
        ) t2
        ON post.id = t2.postIdyes) t3
      LEFT JOIN (
        SELECT postId AS postIdsalty, COUNT(userId) AS salty
        FROM saltyVotes
        GROUP BY postId
      ) t4
      ON t3.id = t4.postIdsalty) t5
    LEFT JOIN (
      SELECT postId as postIdbad , COUNT(userId) AS bad
      FROM badVotes
      GROUP BY postId
    ) t6
    ON t5.id = t6.postIdbad) t7
  LEFT JOIN (
    SELECT id as userId , name
    FROM user
  ) t8
  ON t7.userId = t8.userId
  `)

/*) t6
    */
// requete SQL pour ajouter un post
const addPost = (params) =>
  exec('INSERT INTO post (userId, content) VALUES (?, ?)',
    [params.userId, params.content])

// test pour savoir si addPost fonctionne !
/* addPost({userId: 6, content: 'blllllllllllllla'})
  .then(result => console.log('result:', result))
  .catch(console.error) */

const addVote = (params, table) =>
  exec(`INSERT INTO ${table} (userId, postId) VALUES (?, ?)`,
    [params.user, params.id])

const selectVote = (params, table) =>
  exec(`SELECT * FROM ${table} WHERE userId = ? AND postId = ?`,
    [params.user, params.id])

const countVote = (params, table) =>
  exec(`SELECT postId as id, COUNT(userId) as nbVotes FROM ${table} WHERE postId = ? GROUP BY id `,
    [params.id])

/* selectVote({user: 2, idPost:1},'yesVotes')
    .then(result => console.log('result:', result))
    .catch(console.error) */

module.exports = {
  addPost,
  addVote,
  selectVote,
  getPosts,
  countVote
}
