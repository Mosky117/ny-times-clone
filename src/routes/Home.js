import '../css/Home.css'
import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import Stories from '../components/topStories';
import MoreNews from '../components/MoreNews';
import MovieReviews from '../components/MovieReviews';
import OtherNews from '../components/OtherNews';
import Footer from '../components/Footer';

function Home(){
    const [articles, setArticles]=useState([]);
    useEffect(() => {
        const fetchArticles= async () => {
          try {
            const res= await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=v6zURJaRSCfU6E18GsR8ve98zlQMCgNB`);
            setArticles(res.data.results);
          } catch (error) {
            console.error(error);
          }
        };
        fetchArticles();
      }, []);

    return(
        <div className='page'>
            <div className='grid-container'>
                <section className='news-container'>
                  {articles.map((article)=>(
                    <a href={article.url} key={article.id+Math.random()} className='left-layout'>
                      <div className='news-wrapper'>
                        <h2>{article.title}</h2>
                        <p>{article.abstract}</p>
                      </div>
                      <div className='img-wrapper'>
                        {article.media.length>0 &&(
                          <img className='img-news' src={article.media[0]['media-metadata'][2]['url']} alt=''></img>
                        )}
                      </div>
                    </a>
                  ))}
                </section>
                <Stories/>
            </div>
            <h4 className='section title'>More News</h4>
            <MoreNews/>
            <h4 className='title'>Movie Reviews</h4>
            <MovieReviews/>
            <h4 className='other-title'>Other News</h4>
            <OtherNews/>
            <a href='/' className='section title'><h3>New York Times</h3></a>
            <Footer/>
        </div>
    )
}

export default Home;
