import '../css/Home.css'
import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function MoreNews(){
    const [moreNews, setMoreNews]=useState([]);
    useEffect(()=>{
        const fetchMoreNews= async()=>{
            try {
                const res= await axios.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=v6zURJaRSCfU6E18GsR8ve98zlQMCgNB`);
                setMoreNews(res.data.results.slice(0,10));
            } catch (e) {
                console.log(e);
            }
        }
        fetchMoreNews();
    },[]);

    return(
        
        <section className='more-news-container'>
            <div className='more-news-left'>
                <div className='news-left'>
                    {moreNews.length>0 &&(
                        <div className='left-box'>
                            <a href={moreNews[0].url}>
                                <h4>{moreNews[0].title}</h4>
                                <p className='end-news'>{moreNews[0].abstract}</p>
                            </a>
                            <a href={moreNews[1].url}>
                                <h4>{moreNews[1].title}</h4>
                                <p className='end-news'>{moreNews[1].abstract}</p>
                            </a>
                            <a href={moreNews[2].url}>
                                <h4>{moreNews[2].title}</h4>
                                <p>{moreNews[2].abstract}</p>
                            </a>
                        </div>
                    )}

                    {moreNews[3] &&(
                        <div className='center-box'>
                            <a href={moreNews[3].url}>
                                <img src={moreNews[3].multimedia[2].url} alt=''></img>
                                <h4>{moreNews[3].title}</h4>
                                <p>{moreNews[3].abstract}</p>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className='more-news-right'>
                <div className='news-right'>
                {moreNews.length>0 &&(
                        <div className='left-box'>
                            <a href={moreNews[4].url}>
                                <h4 className='end-news'>{moreNews[4].title}</h4>
                            </a>
                            <a href={moreNews[5].url}>
                                <h4 className='end-news'>{moreNews[5].title}</h4>
                            </a>
                            <a href={moreNews[6].url}>
                                <h4 className='end-news'>{moreNews[6].title}</h4>
                            </a>
                            <a href={moreNews[7].url}>
                                <h4 className='end-news'>{moreNews[7].title}</h4>
                            </a>
                            <a href={moreNews[8].url}>
                                <h4 className='end-news'>{moreNews[8].title}</h4>
                            </a>
                            <a href={moreNews[9].url}>
                                <h4>{moreNews[9].title}</h4>
                            </a>    
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default MoreNews;