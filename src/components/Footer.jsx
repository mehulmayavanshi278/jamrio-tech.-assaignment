import React from 'react'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-dark mt-3 text-light'>
      <div className='header row py-3'>
        <div className='col-md-6 d-flex justify-content-between align-items-center p-0'>
            <a> terms of service</a>
            <a> privacy</a>
            <a> content policy</a>
        </div>
        <div className=' col-md-6 d-flex justify-content-center align-items-center'>
            <p className='overflow-hidden m-0 p-0'> copyright &#169; mehul mayavanshi </p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer
