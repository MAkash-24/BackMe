import React from 'react'
import "./style.css";



const Home = () => {
  return (
    <div>
      <div  className='homeBack'>

      <div className='container-fluid row mt-5'>
      <div className='col-sm-6 center-block text-left px-3 display-3'>
        Migrate Your Data <br /> Easily <br />
        <p className='display-6'>The developer data platform that provides the services and tools necessary to migrate your data from different databases.</p>
        
        <button className='btn btn-primary'> Get Started</button>
        <button className='btn '>Contact Us</button> <i style={{ fontSize: 20 }} className="fas">
        &#xf061;
</i>

        </div>

      <div className='col-sm-1'>

      </div>
      <div className='col-sm-5' id="image">
        {/* <img src="/public/images/server-concept-illustration_114360-287.svg" alt="image" />
        Akash Maurya */}
      </div>
     
      </div>
      
             </div>
            </div>
        
  )
}

export default Home