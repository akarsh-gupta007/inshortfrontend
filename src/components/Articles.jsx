import { useState, useEffect } from 'react';
import { getNews } from "../service/api";
import Article from './Article';
import "./Style.css"
const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);
    console.log(page)
    // const [data,setData]=useState(news)

    useEffect(() => {
        const detail=async()=>{
            const response = await getNews();
            setNews([...response.data])
            console.log(response.data,"response")
            
        }
        detail()
    }, [])

    const loadmore=async()=>{
        setPage(page => page + 1)
        const response=await getNews();
        setNews([...news,...response.data])
        console.log(news,"loadmore")
    }
    console.log(news)
    return (
           <>
            {
                news.map((article,index )=> (
                    <Article article={article} index={index} />
                ))
            }
            <button className='loadmore' onClick={loadmore}>Load more....</button>
           </>
          
    )
}
export default Articles;