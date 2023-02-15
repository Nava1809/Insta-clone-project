import React from "react";
import { useNavigate } from 'react-router-dom';
import "./upload.css";
import { Link } from "react-router-dom";

const Upload = () => {
    const navigate = useNavigate();

   
    const handleSubmit = async (e) => {
       
        e.preventDefault()
        let data =e.target
        let formData=new FormData(data)
        await fetch('http://localhost:5000/posts',{method:"POST",body:formData})
        .then(res=> res.json()).then((d)=>{
            alert("post successful")
            console.log(d);
        }).catch((e)=>{console.log(e.message)}).finally(()=>{navigate("/InstaClone")})
    }
    return (
        <>
            <nav className="header">
         <section className="logo">
            <img src={require("../PostView/instaclone logo.png")} alt="logo"/>
         </section>
         <section className="camera-icon">
            <Link to="/upload">
         <button><img src={require("../PostView/camera.png")} alt="camera"/></button>
         </Link>

         </section>
        </nav>


        <div className="uploadcontainer">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <main>
                <div class="uploadfile">
    <input type="file" required placeholder="file" name="PostImage"  className="btn" id="image"/>
    <br/>
     </div>
     <div class="author-location">
    <input type="text" required placeholder="Author" name="name" id="author" />
    <input type="text" required placeholder="Location" name="location" id="location" />
    <br/>
    </div>
    <div class="post-description">
    <input type="text" required placeholder="Description" name="description"  id="description"/>
    <br/>
    <br/>
</div>
<div class="submit">
    <button type="submit">Post</button>
</div>

                </main>
            </form>
        </div>
        </>
    )
}
export default Upload;