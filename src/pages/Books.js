import React from "react";
import '../css/Books.css'
import '../css/Home.css'
import Footer from "../components/Footer";
import BookReviews from "../components/BookLists";

const Books = () => (
  <div className="page">
    {/* <BestSellers/> */}
    <h1>Book Reviews</h1>
    <BookReviews/>
    <a href='/' className='section title'><h3>New York Times</h3></a>
    <Footer/>
  </div>
);

export default Books;