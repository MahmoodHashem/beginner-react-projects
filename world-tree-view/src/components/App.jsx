
import geoData from '../data.js'
import MenuList from './MenuList.jsx'
import Nav from './Nav.jsx'

function App() {
   return (
      <>
         <Nav />
         <MenuList list={geoData} />
      </>
   )
}

export default App
