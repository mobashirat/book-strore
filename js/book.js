const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const errorMessage = document.getElementById('error-msg')
    const searchText = searchField.value

    console.log(searchText)

    if (searchText == 0) {
        errorMessage.innerText = 'search something to display'
    }

    searchField.value = '';

    const url = ` https://openlibrary.org/search.json?q=${searchText} `

    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs));

}

const displayBooks = docs => {
    const searchBook = document.getElementById('search-result')
    searchBook.textContent = '';



    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
               
                <div class="card-body">
                <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg"  class="card-img-top" alt="...">
                    <h5 class="card-title">${doc.title}</h5>
                    <p class="card-text">${doc.author_name}</p>
                    <p class="card-text">${doc.first_publish_year}'</p>
                    <p class="card-text">publisher:${doc.publisher.slice(0, 5)} </p>
                    
                </div>
            </div>`;
        searchBook.appendChild(div)





    })

    // const foundData = document.getElementById('found-data')
    // foundData.textContent = '';

    // const div = document.createElement('div');
    // div.innerHTML = `
    // <h4>Search Result:${docs.numFound}</h4>
    // `;
    // foundData.appendChild(div)
}



