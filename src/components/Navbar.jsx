import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {

  const showmenubar = () =>{
    document.querySelector('.navitems').style="display:block";
  }
  const hidemenubar = ()=>{
    if(window.innerWidth<768){
      document.querySelector('.navitems').style="display:none";
    }
   
  }


  return (
    <>
       <div className=' navbar container-fluid bg-white  p-md-3'>
      <div className='container row mx-auto'>
      <div className='h2 col-md-8 overflow-hidden d-flex justify-content-between align-items-center '>
          <b> My-app </b> 
          <i className="fa-solid fa-bars menuicon"onClick={showmenubar}></i> 
          </div> 
      <div className='col-md-4 bg-white navitems'>
        <ul className='d-flex flex-md-row justify-content-start flex-column align-item-center m-0 p-0'onClick={hidemenubar}>
          <NavLink to="/">  <li className='px-3'>Home</li> </NavLink>
          <NavLink to="/aboutus">  <li className='px-3'>About us</li> </NavLink>
          {/* <NavLink to="/posts">  <li>Posts</li> </NavLink> */}
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
