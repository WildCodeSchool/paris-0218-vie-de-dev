export const refreshPage = () => {
  // Rechargement de la page au log-in/log-out
  const signOutForm = document.getElementById('sign_out_form')
  const signOutForm2 = document.getElementById('sign_out_form2')
  const signInForm = document.getElementById('sign_in_form')

  signOutForm.addEventListener('submit', () => {
    console.log('CA SIGNOUT LE RELOAD')
    window.location.reload()
  })

  signOutForm2.addEventListener('submit', () => {
    console.log('CA SIGNOUT LE RELOAD')
    window.location.reload()
  })

  signInForm.addEventListener('submit', () => {
    console.log('CA SIGNIN DE OUF LE RELOAD')
    window.location.reload()
  })
}
