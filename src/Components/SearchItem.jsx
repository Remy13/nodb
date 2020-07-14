import React from 'react';

class SearchItem extends React.Component {
   render() {
       const {title, image, Year} = this.props;

       return (
           <div className="search-item-wrapper">
               <div className="title-year">
                   <h5 className="title">{title}</h5>
               </div>
               <div className="">
                   <button>Add to Recomended</button>
               </div>
           </div>
       )
   }
}

export default SearchItem;