'use strict';

let API_Key = '563492ad6f9170000100000197b3f2ff2de44d0f8b46fa4f7b03d27b';

/*Variables*/
const gallery = document.getElementById('gallery');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.search-form');
let searchValue;
const more = document.querySelector('.more');
let page = 1;
let fetchLink;
let currentSearch;
/**Event listeners */
searchInput.addEventListener('input', updateInput);
form.addEventListener('submit', e => {
    e.preventDefault();
    currentSearch = searchValue;
    searchPhotos(searchValue);
})

more.addEventListener('click', loadMore);

/*Functions*/
window.onload = init();
function init() {
    console.log('Getting images from Pexels API..');
    curatedPhotos();
}
/*Fetching API Function*/
async function fetchAPI(url) {
    const dataFetch = await fetch(url, {
        method: 'GET', headers: { Accept: 'application/json', Authorization: API_Key }
    });
    const data = await dataFetch.json();
    return data;
}
async function curatedPhotos() {
    fetchLink = 'https://api.pexels.com/v1/curated?per_page=15&page=1'
    const data = await fetchAPI(fetchLink);
    generatePictures(data);
}

async function searchPhotos(search) {
    clear();
    fetchLink = `https://api.pexels.com/v1/search?query=${search}nature&per_page=15&page=1`
    const data = await fetchAPI(fetchLink);
    generatePictures(data);
}

function generatePictures(data) {
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        /*Classname for styling */
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `
        <div class='gallery-info'>
         <P>By ${photo.photographer}</P>
         <a href = ${photo.src.original}>Full-Size</a></div><img src=${photo.src.large}></img>
    `;
        gallery.appendChild(galleryImg);
    });
}
function updateInput(e) {
    searchValue = e.target.value;
}

function clear() {
    gallery.innerHTML = '';
    searchInput.value = '';
}

async function loadMore() {
    page++;
    if (currentSearch) {
        fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}nature&per_page=15&page=${page}`
    }
    else {
        fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`
    }
    const data = await fetchAPI(fetchLink)
    generatePictures(data)
}