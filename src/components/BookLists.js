import '../css/Books.css'
import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function BookReviews(){
    const [reviews, setReviews]= useState([]);
    useEffect(()=>{
        const fetchReviews= async()=>{
            try {
                const res= await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=v6zURJaRSCfU6E18GsR8ve98zlQMCgNB`);
                setReviews(res.data.results.lists.slice(0,5));
            } catch (e) {
                console.log(e);
            }
        };
        fetchReviews();
    },[])

    return(
        <section className='books-container'>
            {reviews.map((review)=>(
                <div className='books-list'>
                    <h2 className='list-title'>{review.list_name}</h2>
                    {review.books && review.books.length>0 &&(
                        <div className='books-content'>
                            {review.books.map((book)=>(
                                <div className='content'>
                                    <h3>{book.title}</h3>
                                    <p>{book.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}

export default BookReviews;