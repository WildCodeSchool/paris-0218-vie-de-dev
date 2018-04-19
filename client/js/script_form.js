document.getElementById('bouton').addEventListener('submit', event => {
	event.preventDefault()
	const newPost = document.getElementById('formulaire').value

	fetch('http://localhost:3000/post/soumettre', {
		method: 'post',
		userId: 8,
		content: 'blague de dev'
	}).then(res => console.log(res.status))
})
