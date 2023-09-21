const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4e39a2ec6ea15ebb0f351543d21f16fc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=4e39a2ec6ea15ebb0f351543d21f16fc&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.ariaValueMax
    if(searchTerm && searchTerm !== '') {
         getMovies(SEARCH_API + searchTerm)

         search.value = ''
    }
    else {
        window.location.reload()
    }
})

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}