console.log('hello world')


function addMovie (event) {
    event.preventDefault()

    let inputField = document.querySelector('input');
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle)

    //add
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    let list = document.querySelector('ul')
    list.appendChild(movie)
        inputField = "";

        //delete
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click', deleteMovie)
        movie.appendChild(deleteBtn)
        
        
    }
    document.querySelector('form').addEventListener('submit',addMovie)
    
    function deleteMovie (event) {
        event.target.parentNode.remove()
        message.textContent = 'movie deleted!'
    }
    
    function crossOffMovie(event) {
        event.target.classList.toggle('checked')
    
        if (event.target.classList.contains('checked') === true) {
            message.textContent = 'Movie watched!'
            
        } else {
            message.textContent = 'Movie added back!'
            
        }
    }
    
