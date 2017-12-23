import React, { Component } from "react";
import MoviesPagination from "./Pagination";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Movie from "../components/Movie";
import "../styles/ShowMovies.scss";

class ShowMovies extends Component {
  constructor(props) {
    super(props);
    // When react change Router by hand
    switch (true) {
      case /genre\/all/.test(props.match.url):
        props.dispatch({ type: "SET_FILTER_BY_GENRE", filter: "SHOW_ALL" });
        break;
      case /genre/.test(props.match.url):
        props.dispatch({ type: "SET_FILTER_BY_GENRE", filter: "SHOW_GENRE", item: props.match.params.genre });
        break;
      case /search/.test(props.match.url):
        props.dispatch({ type: "SET_SEARCH", filter: "SEARCH", search: props.match.params.movies });
        break;
    }
  }

  moviesItem(date, select, pageSize) {
    let pageIndex = (select - 1) * pageSize;
    let perPage = (select - 1) * pageSize + pageSize;
    return date.slice(pageIndex, perPage).map((item, indexKey) => {
      return <Movie item={item} key={indexKey} />;
    });
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.length != 0 ? (
          <div>
            <ul className="Movieslist">
              {this.moviesItem(movies, this.props.match.params.page || 1, this.props.perpage)}
            </ul>
            <MoviesPagination
              activePage={Number(this.props.match.params.page) || 1}
              maxItems={Math.ceil(movies.length / this.props.perpage)}
            />
            </div>
        ) : (
          <div>
            <p className="search-inf">SEARCH: {this.props.match.params.movies}</p>
            <h1>Sorry! We could not find movies!</h1>
          </div>
        )}
      </div>
    );
  }
}

const getFiltersMovies = (movies, filter) => {
  switch (filter.filter || filter) {
    case "SHOW_ALL":
      return movies;
    case "SHOW_GENRE":
      const genre = new RegExp(filter.item, "i");
      return movies.filter(t => t.genre.match(genre));
    case "SEARCH":
      const search = new RegExp(`^${filter.search}`, "i");
      return movies.filter(t => t.title.match(search));
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  movies: getFiltersMovies(state.moviesReducers, state.moviesFilter),
  select: state.paginationReducer.active,
  perpage: state.paginationReducer.perpage
});

export default withRouter(connect(mapStateToProps)(ShowMovies));
