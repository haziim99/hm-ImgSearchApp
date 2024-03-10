const accessKey = 'gGTm74kxLyId4vmriMEvkg6yx6ZyDMwcmJsUtW65l30'

const formEI = document.querySelector('form')
const inputEI = document.getElementById('search-input')
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById('show-more-button')

let inputData = ""
let page = 1;

async function searchImages() {
    inputData = inputEI.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=$
    {inputData}&client_id=${accesskey}`
  };

  const response = await fetch(url)
  const data = await response.json()

  const results = data.results

  if (page === 1){
    searchResults.innerHTML = ""
  };