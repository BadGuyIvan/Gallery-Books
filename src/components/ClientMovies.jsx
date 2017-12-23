import React, { Component } from "react";
import ShowMovies from "../containers/ShowMovies";
import Genre from "../containers/Genre";
import Search from "../containers/Search";
import NoMatch from "./NoMatch";
import { Row, Col } from "react-bootstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieId from '../containers/MovieId';

class ClientMovies extends React.Component {
  render() {
    return (
      <Row>
        <Col className="nav" md={2}>
          <span className="title">Genres</span>
          <Genre />
        </Col>
        <Col className="main" md={10}>
          {!(/\/movies\/[\d\w]{32}/.test(this.props.location.pathname)) && <Search />}
          <Switch>
            <Redirect exact from="/movies" to="movies/genre/all" />
            <Route exact path="/movies/genre/:genre" component={ShowMovies} />
            <Route exact path="/movies/search/:movies" component={ShowMovies} />
            <Route path="/movies/genre/:genre/:page([^0\D].*)" component={ShowMovies} />
            <Route path="/movies/search/:movies/:page([^0\D].*)" component={ShowMovies} />
            <Route exact path="/movies/:id" component={MovieId} />
            <Route component={NoMatch} />
          </Switch>
        </Col>
      </Row>
    );
  }
}

export default ClientMovies;
