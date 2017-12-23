import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col } from "react-bootstrap";
// import { withRouter } from "react-router";
class MovieId extends Component {
    render(){
        const { movie } = this.props;
        return (
            <Row>
                <Col md={3} lg={3}>
                 <img src={`/public/images/${movie[0].poster}`} alt={movie[0].poster} />
                 </Col>
                 <Col md={9} lg={9}>
                     <h4>{movie[0].title}</h4>
                 </Col>
            </Row>
        )
    }
}

const filterId = (movie,url) => {
    return  movie.filter(mov => mov.id == url.match.params.id)
}

const mapStateToProps = (state,url) => ({
    movie: filterId(state.moviesReducers,url)
})

export default connect(mapStateToProps)(MovieId);