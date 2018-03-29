const express = require("express")
const app=express()
app.get('/', (req, res) => {
  res.end('OK')
})
app.listen(3000, () => console.log("serveur a l'écoute sur port 3000" ))
