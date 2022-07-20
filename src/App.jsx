import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
export default function App() {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-12'><Navbar/></div>
    </div>

    <div className='row'>
    <div className='col-12 main'><Main/></div>
    </div>

    <div className='row'>
    <div className='col-12'><Footer/></div>
    </div>

    </div>
  )
}
