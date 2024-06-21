import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

function News({ category }) {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);

    const resultNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=4799f3ba2b2c4bb89508f3a901897649`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            if (parsedData.articles && parsedData.totalResults) {
                setArticles(parsedData.articles);
                setTotalResults(parsedData.totalResults);
            } else {
                console.error('Invalid data format:', parsedData);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        resultNews();
    }, [category]);

    const fetchData = async () => {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${nextPage}&apiKey=4799f3ba2b2c4bb89508f3a901897649`;
        setPage(nextPage);
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
        } catch (error) {
            console.error('Error fetching more news:', error);
        }
    };

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={articles.length < totalResults}
            loader={<h4 className="text-center">Loading...</h4>}
            endMessage={<p style={{ textAlign: "center" }}><h1><b>Yay! You have seen it all</b></h1></p>}
        >
            <div>
                <div >
                    {articles.map((element) => (
                        <div key={element.url}>
                            <NewsItem
                                sourceName={element.source?.name}
                                title={element.title}
                                desc={element.description}
                                imageURL={element.urlToImage ? element.urlToImage : 'default-image-url'}
                                newsUrl={element.url}
                            /> <br /><br />
                        </div>
                    ))}
                </div>
            </div>
        </InfiniteScroll>
    );
}

export default News;





