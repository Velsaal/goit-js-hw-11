import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();
    
    if (!query) {
        iziToast.error({
            title: 'Error!',
            message: 'Please enter a search term!',
            position: 'topRight'
         });
        return;
    }
    
    loader.style.display = 'block';
    gallery.innerHTML = '';
    
    fetchImages(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.error({ 
                    title: 'Error!',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                 });
            } else {
                renderImages(images);
            }
        })
        .catch(() => {
            iziToast.error({ message: 'Failed to fetch images. Try again later!' });
        })
        .finally(() => {
            loader.style.display = 'none';
        });
});