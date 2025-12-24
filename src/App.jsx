import React from 'react'
import Layout from './layout/Layout'
import { Routes,Route } from 'react-router-dom'
import CoreServices from './components/CoreServices/CoreServices'
import ApplicationServices from './components/CoreServices/ApplicationServices'
import MultiLanguage from './components/CoreServices/MultiLanguage'
import AboutUs from './components/CoreServices/AboutUs'


function App() {
  return (
    <>
   <Routes>
     <Route path='/' element={<Layout/>}>
       <Route index element = {<> <CoreServices/> <ApplicationServices/> <MultiLanguage/> <AboutUs/> </>}/>
     </Route>
   </Routes>
    </>
  )
}

export default App