let counter = 0

export const backgroundChange = () => {
  const posts = document.getElementById('posts')
  const menu = document.getElementById('main_navbar')
  const logo = document.getElementById('logo') // variable qui prend l'element 'logo' lié au logo dans index.html
  const minilogo = document.getElementById('minilogo')
  logo.style.cursor = 'pointer' //
  minilogo.style.cursor = 'pointer'

  logo.addEventListener('click', () => {
    posts.classList.remove(`color-${counter}`)
    menu.classList.remove(`color-${counter}`)
    counter = (counter + 1) % 3
    posts.classList.add(`color-${counter}`)
    menu.classList.add(`color-${counter}`)
  })

  minilogo.addEventListener('click', () => {
    posts.classList.remove(`color-${counter}`)
    menu.classList.remove(`color-${counter}`)
    counter = (counter + 1) % 3
    posts.classList.add(`color-${counter}`)
    menu.classList.add(`color-${counter}`)
  })
}
