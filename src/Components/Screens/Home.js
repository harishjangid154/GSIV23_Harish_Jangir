import React from 'react'
import env from 'react-dotenv'

function Home() {
  return (
    <div>{env.apikey}</div>
  )
}

export default Home