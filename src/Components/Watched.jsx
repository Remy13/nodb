import React from 'react';
import "./Movie.css";

class Watched extends React.Component {
   render() {
       const {title, image, Year} = this.props;

       return (
           <div className="movie">
               <div className="title-year">
                   <h1 className="title">{title}</h1>
                   <h2 className="year">{Year}</h2>
               </div>
               <div className="poster">
                   <img style={{height: '200px', width: '100px' }} src={image} alt="my movie poster"/>
                   <button>Add to Liked</button>
               </div>
           </div>
       )
   }
}

export default Watched;