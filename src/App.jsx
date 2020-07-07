import React from 'react';
import './App.css';
import unirest from "unirest";
import Movie from "./Movie.jsx";
import Search from "./Search.jsx";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={movies:[]}
  }
    sendRequest = (title) => {
      var req = unirest('GET', 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/'+title);
      req.headers({
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
        'x-rapidapi-key': 'b72eadabe1msh3e34389626a5a29p196678jsn631ea0af2b06',
        'useQueryString': true
      });
      req.end( (res) => { 
        if (res.error) throw new Error(res.error);
        this.setState({movies: res.body.titles })
      })
    }
     
render(){
   return (
     <div className="App">
       <header className="App-header">
         
         {this.state.movies.map((movie) => {
     return <Movie {...movie}/>
   })
 }
       <input onChange={(e)=>this.setState({title: e.target.value})}/> 
        <button onClick={()=>this.sendRequest(this.state.title)}>Search</button>
        <p>Recomended Movies</p>
       </header>
     </div>
   );
 }
}

export default App;