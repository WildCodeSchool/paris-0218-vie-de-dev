export const addUser = () => {
  const messageElement2 = document.getElementById('message2')
  const URLSearchParams = window.URLSearchParams
  const name = document.getElementById('username_sub')
  const email = document.getElementById('email_sub')
  const password = document.getElementById('password_sub')
  const fields = { name, email, password }

  document.getElementById('adduser').addEventListener('submit', event => {
    event.preventDefault()

    window.fetch('http://localhost:3000/addUser', {
      method: 'post',
      body: new URLSearchParams({
        name: name.value,
        email: email.value,
        password: password.value
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          const errorField = fields[res.data.key]
          errorField.select()
          messageElement2.innerHTML = res.error || ''
        } else {
          window.location.replace('/')
        }
      })
  })
}
