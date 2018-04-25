const mysql = require('mysql2/promise')
const co = mysql.createConnection({
  host: 'localHost'
  user: 'root'
  database: 'VDD'
})
const getPosts = () => {
  return co.then(connection => {
    return connection.execute('SELECT * FROM post')
      .then((result) => result[0])
  })
}





module.export = {
  getPosts
}