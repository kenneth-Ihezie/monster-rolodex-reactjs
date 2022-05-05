import React from "react";
import './SearchBox.css';


//props come in as javascript object so the Search function parameter
//just destructure it.
const Search = ({placeholder, handleChange}) => {
    return (
        <input className='search'  type='search' placeholder={ placeholder} onChange={ handleChange }/>
    )
}

export default Search