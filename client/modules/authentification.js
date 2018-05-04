export const authentification = () => {
  const authElement = document.getElementById('auth')
  const authElement2 = document.getElementById('auth2')
  const messageElement = document.getElementById('message')
  const signInForm = document.getElementById('sign_in_form')
  const signOutForm = document.getElementById('sign_out_form')
  const signOutForm2 = document.getElementById('sign_out_form2')
  const modal = document.getElementById('modal')

  const handleAuth = res => {
    if (res.name) {
      authElement.textContent = authElement2.textContent = `Bonjour ${res.name}`
      modal.style.display = 'none'
      document.body.classList.add('signed_in')
    } else {
      document.body.classList.remove('signed_in')
      authElement.textContent = authElement2.textContent = 'Connectez-vous svp'
    }

    // handle errors
    messageElement.textContent = res.error || ''
  }

  const handleAuth2 = res => {
    if (res.name) {
      authElement.textContent = authElement2.textContent = `Bonjour ${res.name}`
      modal.style.display = 'none'
      document.body.classList.add('signed_in')
    } else {
      document.body.classList.remove('signed_in')
      authElement.textContent = authElement2.textContent = 'Connectez-vous svp'
    }

    // handle errors
    messageElement.textContent = res.error || ''
    if (!res.error) {
      window.location.reload()
    }
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
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      // Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(handleAuth2)
  })

  const handleSignOut = e => {
    e.preventDefault()

    window.fetch('http://localhost:3000/sign-out', { 'credentials': 'include' })
      .then(res => res.json())
      .then(handleAuth)
  }

  signOutForm.addEventListener('submit', handleSignOut)
  signOutForm2.addEventListener('submit', handleSignOut)

  window.fetch('http://localhost:3000/', { 'credentials': 'include' })
    .then(res => res.json())
    .then(handleAuth)
}
