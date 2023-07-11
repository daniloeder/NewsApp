// news.js

const API_KEY = 'YOUR_API_KEY';

export async function fetchNews(category = '', search = '') {
    try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

        if (category) {
            url += `&category=${category}`;
        }

        if (search) {
            url += `&q=${encodeURIComponent(search)}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok') {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}
