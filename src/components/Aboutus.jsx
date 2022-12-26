import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


function Aboutus() {
  
  return (
    <>
      <Navbar/>
      <div className='mmmm'>
      <div className='aboutMe row p-0'>
        <div className='profilePic col-lg-4 col-4 m-auto rounded-circle'>
          <img  className='w-100 rounded-circle'src="./images/myimage.jpeg" alt=""/>
        </div>
        <div className='details col-lg-8 col-12 p-3'>
           <div className='detailsMain  p-lg-0 px-0 px-sm-5 '>
    
            <p className='h5 p-0 m-0 py-3'>mehul mayavanshi</p>
            <div className='boxx border border-success'>
                <div className='Gender  d-flex justify-content-center align-items-center bg-light border-bottom'>
                  <p>Gender</p>
                </div>
                <div className='Gendertype d-flex  align-items-center  border-bottom'>
                  <p>Male</p>
                </div>
                <div className='location d-flex justify-content-center align-items-center bg-light border-bottom'>
                  <p> location</p>
                </div>
                <div className='location d-flex  align-items-center  border-bottom'>
                  <p> vadodara , gujarat</p>
                </div>
                <div className='age d-flex justify-content-center align-items-center bg-light border-bottom'>
                  <p> age</p>
                </div>
                <div className='agetype d-flex  align-items-center  border-bottom'>
                  <p>19</p>
                </div>
                <div className='email d-flex justify-content-center align-items-center bg-light border-bottom'>
                  <p> email</p>
                </div>
                <div className='emailtype d-flex  align-items-center  border-bottom'>
                  <p className='overflow-hidden'> mehulmayavanshi953@gmail.com </p>
                </div>
                <div className='mono d-flex justify-content-center align-items-center bg-light '>
                  <p> Phone </p>
                </div>
                <div className='monotype d-flex  align-items-center'>
                <p>9726165469</p>
                </div>


            </div>

           </div>
        </div>
      </div>

      <Footer/>
      </div>
    </>
  )
}

export default Aboutus