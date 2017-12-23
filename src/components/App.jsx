import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import Main_Movies from "./ClientMovies";
import { Grid, Row, Col } from "react-bootstrap";
import "../styles/App.scss";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Menu />
        </Row>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Main_Movies} />
          <Route path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Grid>
    );
  }
}

export default App;
