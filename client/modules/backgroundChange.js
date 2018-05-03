let counter = 0

export const backgroundChange = () => {
  const posts = document.getElementById('posts')
  const logo = document.getElementById('logo') // variable qui prend l'element 'logo' lié au logo dans index.html
  logo.style.cursor = 'pointer' //

  logo.addEventListener('click', () => {
    posts.classList.remove(`color-${counter}`)
    counter = (counter + 1) % 3
    posts.classList.add(`color-${counter}`)
  })
}
