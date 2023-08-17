import { SearchRounded, SearchSharp } from '@material-ui/icons'
import React from 'react'


class SearchBox extends React.PureComponent {


  render(){
    return (
      <div className='search-bar'>
        <SearchRounded color='#4a4a4a' fontSize='large'/>
        <input type='text' placeholder='Search' />
      </div>
    )
  }
}
export default SearchBox;