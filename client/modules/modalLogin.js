const modal = document.getElementById('modal')
const signup = document.getElementById('signup')
const signupsm = document.getElementById('signupsm')

signup.addEventListener('click', () => {
  modal.style.display = 'block'
})

signupsm.addEventListener('click', () => {
  modal.style.display = 'block'
})

const closeModal = document.getElementById('closeModal')

close_modal.addEventListener('click', () => {
  modal.style.display = 'none'
})
