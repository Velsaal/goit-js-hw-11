import axios from 'axios';
const API_KEY = '48807004-9385a8cdcbe3c5aa2453a42f7';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    }).then(response => response.data.hits)
      .catch(error => {
          console.error('Error fetching images:', error);
          throw error;
      });
}