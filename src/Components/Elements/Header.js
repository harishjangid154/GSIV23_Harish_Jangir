import React from 'react'

function Header({LeftComponent, RightComponent, leftComponentProps, rightComponentProps, ...rest}) {
  return (
    <div className='header'>
        <LeftComponent {...leftComponentProps} {...rest}/>
        <RightComponent {...rightComponentProps} {...rest}/>
    </div>
  )
}

export default Header