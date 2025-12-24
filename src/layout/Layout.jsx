
import '../App.css'
// outlet
import { Outlet } from 'react-router-dom'

// layout components
import Footer from './navcompo/Footer'
import Header from './navcompo/Header'

function Layout() {
  return (
    <>
   {/* HEADER */}

     <Header/>
    {/* BODY */}
    <main className='main'>
        <Outlet/>
    </main>

    {/* FOOTER */}
    <Footer/>
    </>
  )
}

export default Layout

