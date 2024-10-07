/* eslint-disable no-unused-vars */


import Header from './components/Header'
import Search from './components/Search'
import Body from './components/Body'
import Toast from './components/Toast'
import { useEffect, useState } from 'react'

function App(){
  return(
   
    <div className="container">
        <Header />
     <Body />
    </div>
  
   
  )
}

export default App;