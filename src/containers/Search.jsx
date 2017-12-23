import React from "react";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { setSearch } from "../actions/moviesAction";
import { connect } from "react-redux";
import { FormControl, FormGroup, InputGroup, Button, Glyphicon } from "react-bootstrap";
import "../styles/Search.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.Changed = this.Changed.bind(this);
  }

  Changed(e) {
    this.setState({ search: e.target.value });
  }

  HandleSearch() {
    this.props.history.replace(`/movies/search/${this.state.search}`);
    this.props.setSearch("SEARCH", this.state.search);
    this.search.value = "";
    this.setState({search: ""});
  }

  render() {
    return (
      <FormGroup className="search">
        <InputGroup>
          <FormControl
            inputRef={ref => {
              this.search = ref;
            }}
            type="text"
            placeholder="Search Movies"
            onChange={this.Changed}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.HandleSearch();
              }
            }}
          />
          <InputGroup.Button>
            <Button
              onClick={e => {
                this.HandleSearch();
              }}
            >
              <Glyphicon glyph="search" />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setSearch }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
