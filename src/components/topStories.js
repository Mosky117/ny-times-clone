import '../css/Home.css'
import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function Stories(){
  const subject=['arts', 'automobiles', 'books/review', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 
                 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];
  const [topStories, setTopStories]= useState([]);
    useEffect(()=>{
      const fetchTopStories= async()=>{
        try{
          const res= await axios.get(`https://api.nytimes.com/svc/topstories/v2/${subject[Math.floor(Math.random() * 25)]}.json?api-key=${process.env.REACT_APP_API_KEY}`);
          setTopStories(res.data.results.slice(0,15));
        }catch (error){
          console.log(error);
        }
      };
      fetchTopStories();
    },[]);

    
  function KeyGenerator() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    const uniqueKey = `${timestamp}-${random}`;
    return uniqueKey;
  }

    return(
      <section className='second-news-container'>
          {topStories.map((topStory)=>(
              <a href={topStory.url} key={KeyGenerator}>
                  <h3>{topStory.title}</h3>
                  <p>{topStory.abstract}</p>
                  {topStory.multimedia && topStory.multimedia.length>0 &&(
                    <img src={topStory.multimedia[1].url} alt=''></img>
                  )}
                  <hr></hr>
              </a>
          ))}
      </section>
    )
}

export default Stories;