import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image => `
     <li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link">
                <img src="${image.webformatURL}" alt="${image.tags}"/>
                <div class="info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                    <span> ${image.likes}</span>
                    <span> ${image.views}</span>
                    <span> ${image.comments}</span>
                    <span> ${image.downloads}</span>
                </div>
            </a>
     </li>
    `).join('');
    
    const lightbox = new SimpleLightbox('.gallery a',{
captionsData :"alt",
captionDelay: 250,
    });
    lightbox.refresh();
}