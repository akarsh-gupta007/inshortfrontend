import axios from 'axios';

// const URL = 'http://localhost:8800';


export const getNews = async () => {
    try {
        const a=await axios.get('https://inshortbackend.onrender.com/news?page=0&size=25')
        console.log(a)
        return a;
        
    } catch (error) {
        console.log('error while calling getNews API');
    }
}