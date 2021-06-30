import React, { Component } from "react";
import axios from "axios";

export class MovieDetail extends Component {
  state = {
    Actors: "",
    Awards: "",
    Country: "",
    Plot: "",
    Poster: "",
    Rated: "",
    Ratings: [],
    Title: "",
    imdbID: "",
    isLoading: true,
  };

  async componentDidMount() {
    try {
      let result = await axios.get(
        `https://omdbapi.com/?apikey=6332b1e1&t=${this.props.match.params.movieTitle}`
      );

      this.setState({
        Actors: result.data.Actors,
        Awards: result.data.Awards,
        Country: result.data.Country,
        Plot: result.data.Plot,
        Poster: result.data.Poster,
        Rated: result.data.Rated,
        Ratings: result.data.Ratings,
        Title: result.data.Title,
        imdbID: result.data.imdbID,
        isLoading: false,
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  showMovieDetail = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img src={this.state.Poster} alt={this.state.Title} />
        </div>
        <div>
          <div>Actors: {this.state.Actors}</div>
          <div>Awards: {this.state.Awards}</div>
          <div>Country: {this.state.Country}</div>
          <div>Plot: {this.state.Plot}</div>
          <div>Poster: {this.state.Poster}</div>
          <div>Rated: {this.state.Rated}</div>
          <div>
            Ratings:{" "}
            {this.state.Ratings.map((item) => {
              return (
                <span key={item.Source}>
                  {item.Source} {item.Value}
                </span>
              );
            })}
          </div>
          <div>Title: {this.state.Title}</div>
          <div>imdbID: {this.state.imdbID}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            ...Loading
          </div>
        ) : (
          this.showMovieDetail()
        )}
      </div>
    );
  }
}

export default MovieDetail;
