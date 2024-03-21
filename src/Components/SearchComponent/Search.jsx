import React from 'react'
import "./module.search.css"
import SearchIcon from '../../assets/icons/Search.svg';
const Search = ({text, marginLeft}) => {
  return (
    <div className='search'  style={{marginLeft:`${marginLeft}`}}>
       <img src={SearchIcon} alt="Search"  />
      <input placeholder={text} />
      </div>
  )
}

export default Search