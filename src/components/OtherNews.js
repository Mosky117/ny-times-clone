import '../css/Home.css'
import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function OtherNews(){
    const [otherNews, setNews]= useState([]);
    useEffect(()=>{
        const fetchOtherNews= async()=>{
            try {
                const res= await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&limit=20&api-key=v6zURJaRSCfU6E18GsR8ve98zlQMCgNB`);
                setNews(res.data.response.docs);
            } catch (e) {
                console.log(e);
            }
        };
        fetchOtherNews();
    },[])

    return (
        <section className='other-news-wrapper'>
            {otherNews.map((news)=>(
                <a href={news.web_url} key={news._id} className='other-news'>
                    <h5>{news.section_name}</h5>
                    {news.multimedia && news.multimedia.length>0 &&(
                        <img src={`https://www.nytimes.com/${news.multimedia[0].url}`} alt=''></img>
                    )}
                    <p>{news.snippet}</p>
                </a>
            ))}
        </section>
    )
}

export default OtherNews;