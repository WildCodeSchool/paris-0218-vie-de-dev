const modal = document.getElementById('modal')
const signUp = document.getElementById('signUp')
const signUpSm = document.getElementById('signUpSm')


signUp.addEventListener('click', () => {
  modal.style.display = 'block'
})

signUpSm.addEventListener('click', () => {
  modal.style.display = 'block'
})


const closeModal = document.getElementById('closeModal')

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})



