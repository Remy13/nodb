import React from 'react';
import './App.css';
import unirest from "unirest";
import Recommends from "./Components/Recomend";
import Liked from "./Components/Liked";
import Watched from "./Components/Watched";
import SearchItem from "./Components/SearchItem.jsx";
import Search from "./Search.jsx";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      movies: [],
      recommendedMovies: [],
      watchedMovies: [],
      likedMovies: []
    }
  }
  sendRequest = (title) => { // get
    var req = unirest('GET', 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/' + title);
    req.headers({
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': 'b72eadabe1msh3e34389626a5a29p196678jsn631ea0af2b06',
      'useQueryString': true
    });
    req.end((res) => {
      if (res.error) throw new Error(res.error);
      this.setState({ movies: res.body.titles })
    })
  }

  // (POST) addToLists
  // (PUT) moveFromLists(from, to)
  // (DELETE) removeFromList

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={(e) => this.setState({ title: e.target.value })} />
          <button onClick={() => this.sendRequest(this.state.title)}>Search</button>
          <p>Recomended Movies</p>
          <div className="header-list">
            {
              this.state.movies.map( (movie, i) => {
                return <SearchItem className="search-item" key={i} {...movie} />
              })
            }
          </div>
        </header>

        <div className="main">
          <div className="recommended-list">
            <h4> Recommended list </h4>
            {
              this.state.recommendedMovies.map( (movie, i) => {
                return <Recommends key={i} {...movie} />
              })
            }
          </div>
          <div className="recommended-list">
            <h4> Watched recommended movies </h4>
            {
              this.state.watchedMovies.map( (movie, i) => {
                return <Watched key={i} {...movie} />
              })
            }
          </div>
          <div className="recommended-list">
            <h4> Would Recommend </h4>
            { 
              this.state.likedMovies.map( (movie, i) => {
                return <Liked key={i} {...movie} />
              })
            }
          </div>

        </div>
      </div>
    );
  }
}

export default App;