const mysql = require('mysql2/promise')
const co = mysql.createConnection({
  host: 'localhost',
  user: 'server',
  password: 'vddISDope',
  database: 'VDD'
})
const exec = async (query, params) => {
  const connection = await co
  const result = await connection.execute(query, params)
  return result[0]
}

const getPosts = () => exec(`
  SELECT * FROM (
    SELECT * FROM (
      SELECT * FROM (
        SELECT * FROM (
          SELECT * FROM post
            LEFT JOIN (
              SELECT postId, COUNT(userId) as commit
              FROM comment
              GROUP BY postId
              ) t10
              ON post.id = t10.postId) tpost
              LEFT JOIN (
                SELECT postId AS postIdyes, COUNT(userId) AS yes
                FROM yesVotes
                GROUP BY postId
              ) t2
              ON tpost.id = t2.postIdyes) t3
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
// requete SQL pour ajouter un post
const addPost = (params) =>
  exec('INSERT INTO post (userId, content) VALUES (?, ?)',
    [params.userId, params.content])

// test pour savoir si addPost fonctionne !
/* addPost({userId: 6, content: 'blllllllllllllla'})
  .then(result => console.log('result:', result))
  .catch(console.error) */

const addVote = (params, table) =>
  exec(`REPLACE INTO ${table} (userId, postId) VALUES (?, ?)`,
    [params.user, params.id])

const selectVote = (params, table) =>
  exec(`SELECT * FROM ${table} WHERE userId = ? AND postId = ?`,
    [params.user, params.id])

const countVote = async (params, table) => (await exec(`SELECT
  postId as id, COUNT(userId) as nbVotes
  FROM ${table}
  WHERE postId = ? GROUP BY id `, [params.id]))[0].nbVotes

const getUsers = () => exec('SELECT * FROM user')
const addUser = (params) => exec(`INSERT INTO user (name, email, password) VALUES (?, ?, ?)`, [params.name, params.email, params.password])

/* selectVote({user: 2, idPost:1},'yesVotes')
    .then(result => console.log('result:', result))
    .catch(console.error) */

// requete SQL pour comment

const getPost = id =>
  exec(`SELECT * FROM (SELECT * FROM post WHERE id=${id}) tPost
        LEFT JOIN (
          SELECT id as userId , name
            FROM user
          ) tUser
        ON tPost.userId = tUser.userId
  `)

const getCommentsOfPost = id =>
  exec(`SELECT * FROM (SELECT * FROM comment WHERE postId = ? ORDER BY createAt DESC) tCom
    LEFT JOIN (
      SELECT id as userId , name
        FROM user
        ) tUser
      ON tCom.userId = tUser.userId `, [ id ])

const addComment = params =>
  exec('INSERT INTO comment (userId, postId, content) VALUES (?, ?, ?)',
    [ params.userId, params.postId, params.content ])
const updateComment = params => exec('UPDATE comment SET userId=?, postId=?, content=? WHERE id=?',
  [ params.userId, params.postId, params.content, params.id ])

module.exports = {
  addPost,
  addVote,
  selectVote,
  getPosts,
  countVote,
  getUsers,
  getCommentsOfPost,
  addComment,
  updateComment,
  getPost,
  addUser
}
