export const authentification = () => {
  const authElement = document.getElementById('auth')
  const authElement2 = document.getElementById('auth2')
  const messageElement = document.getElementById('message')
  const signInForm = document.getElementById('sign_in_form')
  const signOutForm = document.getElementById('sign_out_form')
  const signOutForm2 = document.getElementById('sign_out_form2')
  const modal = document.getElementById('modal')
  const loginbutton = document.getElementById('signup')
  const loginbutton2 = document.getElementById('signupsm')
  const handleAuth = res => {
    const name = res.name
    authElement.innerHTML = name ? `Bonjour ${name}` : 'Not connected, please login'
    authElement2.innerHTML = name ? `Bonjour ${name}` : 'Not connected, please login'
    if (name) modal.style.display = 'none'
    signInForm.style.display = name ? 'none' : 'block'
    signOutForm.style.display = name ? 'block' : 'none'
    signOutForm2.style.display = name ? 'block' : 'none'
    loginbutton.style.display = name ? 'none' : 'block'
    loginbutton2.style.display = name ? 'none' : 'block'

    // handle errors
    messageElement.innerHTML = res.error || ''
  }

  signInForm.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new window.FormData(e.target)
    const credentials = {
      name: formData.get('name'),
      password: formData.get('password')
    }

    window.fetch('http://localhost:3000/sign-in', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      'credentials': 'include', // Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(handleAuth)
  })

  signOutForm.addEventListener('submit', e => {
    e.preventDefault()

    window.fetch('http://localhost:3000/sign-out', { 'credentials': 'include' })
      .then(res => res.json())
      .then(handleAuth)
  })

  signOutForm2.addEventListener('submit', e => {
    e.preventDefault()

    window.fetch('http://localhost:3000/sign-out', { 'credentials': 'include' })
      .then(res => res.json())
      .then(handleAuth)
  })

  window.fetch('http://localhost:3000/', { 'credentials': 'include' })
    .then(res => res.json())
    .then(handleAuth)
}
