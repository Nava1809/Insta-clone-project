import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import Postview from './PostView/postview';

function App() {
  const [userData, updateUserData] = useState([])
  useEffect(() => {
        fetch('http://localhost:5000/')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
              console.log(myJson);
              myJson.reverse()
              updateUserData(myJson)
            });
            
    },[])
    
  
  return (
   <>
   <nav className="header">
         <section className="logo">
            <img src={require("./PostView/instaclone logo.png")} alt="logo"/>
         </section>
         <section className="camera-icon">
            <Link to="/upload">
         <button><img src={require("./PostView/camera.png")} alt="camera"/></button>
         </Link>

         </section>
        </nav>


        <div className="App">
        <div className='cards'>
          {userData.map((ele, ind) => {
            return <Postview key={`card${ind}`} data={ele} index={ind}/>
            })}
        </div>
    </div>
    </>
  )
}
export default App;