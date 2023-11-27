import React from "react";
import './Books.css'
import '../Home/Home.css'
import Footer from "../../components/Footer/Footer";
import BookLists from "../../components/BookLists";

const Books = () => (
  <div className="page">
    <h1>Recommended Books</h1>
    <BookLists/>
    <a href='/' className='section title'><h3>New York Times</h3></a>
    <Footer/>
  </div>
);

export default Books;