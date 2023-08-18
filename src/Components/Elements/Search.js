import { SearchRounded, SearchSharp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';


function SearchBox(props) {
  const [searchQuery, setSearchQuery] = useState(props.searchQuery || "");



  return (
    <div className='search-bar'>
      <div  onClick={() => {
        props.onSearch(1, searchQuery)
      }}>
      <SearchRounded color='#4a4a4a' fontSize='large'/>

      </div>
      <input type='text' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, null)(SearchBox);