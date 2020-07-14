import React from 'react';
import "./Movie.css";

class Liked extends React.Component {
   render() {
       const {title, image, Year} = this.props;

       return (
           <div className="liked">
               <div className="title-year">
                   <h1 className="title">{title}</h1>
                   <h2 className="year">{Year}</h2>
               </div>
               <div className="poster">
                   <img style={{height: '200px', width: '100px' }} src={image} alt="my Liked poster"/>
                   <button> Remove </button>
               </div>
           </div>
       )
   }
}

export default Liked;