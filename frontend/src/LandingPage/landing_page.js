import React from 'react';
import landing from "./ass_13.png"
import '../App.css'
import { Link } from "react-router-dom";
export default function Landing_page() {
  
  return (
    
    <form className='form'>
    <main>
        <div className="container">
            <div className="land">
              <img src={landing} alt="landingimage"></img>
            </div>
            <div className="text">
              <h1>10x Team 04</h1>
              <button><Link to="/InstaClone">Enter</Link></button>
            </div>
          </div>
      
    </main>
</form>



  )
}