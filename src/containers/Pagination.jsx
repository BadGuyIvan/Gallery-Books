import React from "react";
import {Pagination} from "react-bootstrap";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import {setPerPage} from '../actions/moviesAction';
 import "../styles/Pagination.scss";

class CustomerLink extends React.Component {
	render() {
    const { children, eventKey, disabled} = this.props;
    if(disabled != false)
    {
      return <span>{children}</span>
    } else {
      return ( !!this.props.match.url.match(/search/) ? 
            <Link to={`/movies/search/${this.props.match.params.movies}/${eventKey}`}>
                {children}
            </Link> :
            <Link to={`/movies/genre/${this.props.match.params.genre}/${eventKey}`}>
                {children}
            </Link>
      )
    }
  }
}

class MoviesPagination extends React.Component {

    PageSizeChange(e){
        this.props.setPerPage(Number(e.target.value));
    }

    // handleSelect(eventKey) {
    //     // this.props.setPagination(eventKey)
    // }
    render(){
        return (
            <div className="pagination-group">
                <select className="form-control perpage" onChange={this.PageSizeChange.bind(this)}>
                    <option value="3">3 item</option>
                    <option value="6">6 item</option>
                </select>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={this.props.maxItems}
                    buttonComponentClass={withRouter(CustomerLink)}
                    maxButtons={5}
                    activePage={this.props.activePage}
                    // onSelect={this.handleSelect.bind(this)} />
                    />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPerPage},dispatch)
}

export default withRouter(connect(null, mapDispatchToProps) (MoviesPagination));