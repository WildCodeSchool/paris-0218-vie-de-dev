export const addUser = () => {
  document.getElementById('adduser').addEventListener('submit', event => {
    event.preventDefault()
    const URLSearchParams = window.URLSearchParams
    const name = document.getElementById('username_sub').value
    const email = document.getElementById('email_sub').value
    const password = document.getElementById('password_sub').value
    window.fetch('http://localhost:3000/addUser', {
      method: 'post',

      body: new URLSearchParams({
        name: name,
        email: email,
        password: password
      })
    })
      .then(res => window.location.replace('/'))
  })
}
