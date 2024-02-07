import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import './MovieReviews.css'

function MovieReviews(){
    const [movies, setMovies]=useState([]);
    useEffect(()=>{
        const fetchMovies= async()=>{
            try {
                const res= await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name%3A"Movies" AND type_of_material%3A"Review"&sort=newest&page=0&api-key=${process.env.REACT_APP_APIKEY}`);
                setMovies(res.data.response.docs.slice(0,5));
            } catch (e) {
                console.log(e);
            }
        };
        fetchMovies();
    },[]);
    
    return(
        <section className='movies-wrapper'>
            <div className='movies'>
                {movies.map((review)=>(
                    <div className='reviews' key={review._id}> 
                        <a href={review.web_url}>
                            {review.headline && review.headline.main && (
                                <h4>{review.headline.main}</h4>
                            )}
                            {review.multimedia && review.multimedia.length>0 &&(
                                <img src={`https://www.nytimes.com/${review.multimedia[5].url}`} alt=''></img>
                            )}
                        </a>  
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MovieReviews;