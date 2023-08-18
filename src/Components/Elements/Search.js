import { SearchRounded, SearchSharp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';


function SearchBox(props) {
  console.log(props.searchQuery)
  const [searchQuery, setSearchQuery] = useState(props.searchQuery || "");


  useEffect(() => {
    props.onSearch(1, searchQuery);
  },[searchQuery])

  return (
    <div className='search-bar'>
      <SearchRounded color='#4a4a4a' fontSize='large'/>
      <input type='text' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, null)(SearchBox);