
// search-input
const searchBook = () => {
    const searchField = document.getElementById('search-field')

    const searchText = searchField.value

    searchField.value = '';

    const url = ` https://openlibrary.org/search.json?q=${searchText} `

    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs));


}

// show result
const searchTotal = document.getElementById('total-result')

const displayBooks = docs => {

    searchTotal.innerHTML = `<h4>Search Result Found:${docs.length}</h4>`;

    const searchBook = document.getElementById('search-result')
    const errorMessage = document.getElementById('error')


    searchBook.textContent = '';

    if (docs.offset = 'null') {
        errorMessage.innerText = 'No result found'
    }

    // bookist
    docs?.forEach(doc => {

        // clear error message
        if (docs) {
            errorMessage.innerText = ''
        }
        // show books

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 p-2">
               
                <div class="card-body bg-dark">
                <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg"  class="card-img-top" alt="...">
                    <h5 class="card-title text-light">${doc.title}</h5>
                    <p class="card-text text-light">${doc.author_name}</p>
                    <p class="card-text text-light">${doc.first_publish_year}</p>
                    <p class="card-text text-light">publisher:${doc.publisher.slice(0, 5)} </p>
                    
                </div>
            </div>`;
        searchBook.appendChild(div)
    })

}



