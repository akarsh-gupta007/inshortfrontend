import { useState, useEffect } from 'react';
import { getNews } from "../service/api";

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);
    console.log(page)

    useEffect(() => {
        const dailyNews = async () => {
            const response = await getNews();

            setNews([...new Set([...news, ...response.data])]);
        }
        dailyNews();
    }, [news])

    // useEffect(() => {
    //     console.log(news);
    // }, [news])

    return (
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news.map((article,index )=> (
                    <Article article={article} index={index} />
                ))
            }
        </InfiniteScroll>
    )
}
export default Articles;