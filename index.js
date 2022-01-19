console.log('hello world')


function addMovie (event) {
    event.preventDefault()

    const inputField = document.querySelector('input');
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value;
    movieTitle.textContent.addEventListener('click',crossOffMovie)

    movie.appendChild(movieTitle)


    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    const list = document.querySelector('ul')
    list.appendChild(movie)
        inputField = "";

        //delete
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'x'
        deleteBtn.addEventListener('click', deleteMovie)
        movie.appendChild(deleteBtn)
        
        
    }
    document.querySelector('form').addEventListener('submit',addMovie)
    
    function deleteMovie (event) {
        event.target.parentNode.remove()
    }
    function crossOffMovie (event) {
        event.target.classList.toggle('checked')
    }


    
