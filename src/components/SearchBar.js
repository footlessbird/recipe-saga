import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleSubmit(e) {
    const { searchTerm } = this.state;
    e.preventDefault();
    this.props.getRecipes(searchTerm);
    this.setState({
      searchTerm: ""
    });
  }
  handleInput(e) {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleInput.bind(this)}
          />
          <button type="submit">Search</button>
        </form>
        <div />
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => {
  return recipes;
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(SearchBar);
