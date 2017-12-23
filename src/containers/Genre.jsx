import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {bindActionCreators} from "redux";
import {setFilter} from "../actions/moviesAction";
 import "../styles/Genre.scss";
class Genre extends Component {
    render(){
        const genre  = this.props.genre.map(p => p.genre.split("/"))
                                       .reduce((array,currentValue) => (array.concat(currentValue)),[])
                                       .filter((value,index,array) => array.indexOf(value) === index)
                                       .sort()
        return (
            <ul className="navGenre">
            <li onClick={e => this.props.setFilter("SHOW_ALL")}className={!!this.props.history.location.pathname.match(/all/) ? "active genre--item" : "genre--item"} >
                <Link to={`/movies/genre/all`}>All</Link>
            </li>
            {
            genre.map((item,index) => {
                    return (
                        <li onClick={e => this.props.setFilter("SHOW_GENRE", item)}className={!!this.props.history.location.pathname.match(new RegExp(item,'i')) ? "active genre--item" : "genre--item"} key={index}>
                            <Link  to={`/movies/genre/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                        )
                    }
                )   
            }
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return { 
        genre: state.moviesReducers
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setFilter},dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genre));