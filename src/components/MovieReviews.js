import '../css/Home.css'
import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function MovieReviews(){
    const [movies, setMovies]=useState([]);
    useEffect(()=>{
        const fetchMovies= async()=>{
            try {
                const res= await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name%3A"Movies" AND type_of_material%3A"Review"&sort=newest&page=0&api-key=v6zURJaRSCfU6E18GsR8ve98zlQMCgNB`);
                setMovies(res.data.response.docs.slice(0,5));
            } catch (e) {
                console.log(e);
            }
        };
        fetchMovies();
    },[]);
    
    return(
        <section className='movies'>
            {movies.map((review)=>(
                <div className='reviews'> 
                    <a href={review.web_url} key={review._id}>
                        {review.headline && review.headline.main && (
                            <h4>{review.headline.main}</h4>
                        )}
                        {review.multimedia && review.multimedia.length>0 &&(
                            <img src={`https://www.nytimes.com/${review.multimedia[5].url}`} alt=''></img>
                        )}
                    </a>  
                </div>
            ))}
            
        </section>
    )
}

export default MovieReviews;