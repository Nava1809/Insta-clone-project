import React from 'react';
import './postview.css'
export default function Postview(props) {
   const {data}=props

   return (
      <>
      <section className="card">
          <section className="card-header">
              <div>
                  <div className="card-header__name">{data.name}</div>
                  <div className="card-header__place">{data.location}</div>
              </div>
              <span>
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>

              </span>
          </section>
          <section className="card-image">
              <img src={data.PostImage} alt="place"/>
            
          </section>
          <section className="card-actions">
              <span>
              <i className="fa fa-heart" aria-hidden="true"></i>



              </span>
              <span>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </span>
              <span>
                  {data.date}
              </span>

          </section>
          <section className="likes">
              {data.likes} likes
              </section>
              <section className="description">
                  {data.description}
              </section>
      </section>
      </>

    )
}