

const message = document.querySelector('#message');



console.log("hello world")





const addMovie = event => {
  event.preventDefault()

  const inputField = document.querySelector('input');



  const movie = document.createElement('li')


  const movieTitle = document.createElement('span')
  movieTitle.textContent = inputField.value
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle)




  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'X'
  deleteBtn.addEventListener(
    'click',
    deleteMovie
  );
  movie.appendChild(deleteBtn)





  const list = document.querySelector('ul')
  list.appendChild(movie)
  console.log(inputField.value)
  inputField.value = ''
  console.log(inputField.value)




}


const form = document.querySelector('form');


form.addEventListener(
  'submit',
  addMovie
);






function deleteMovie(event) {
  //event.target.parentNode.remove() 
  message.textContent = 'Movie deleted!'
  revealMessage()

  event.target.parentNode.remove();

}





function crossOffMovie(event) {
  event.target.classList.toggle('checked')



  if (event.target.classList.contains('checked') === true) {
    message.textContent = "Movie watched!"
  }

  else {
    message.textContent = 'Movie added back!'

  }
  revealMessage()


}


function revealMessage() {
  // message.classList.remove('hide')

  setTimeout(() => {
    message.classList.add('hide')
  }, 1000)
}



