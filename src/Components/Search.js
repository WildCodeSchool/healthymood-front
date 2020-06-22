import React from "react";
import "../Styles/Search.css";
import Loupe from "../Images/glass.png";
import Cancel from "../Images/cross.png";
import axios from "axios";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      currentSearch: "",
      recipes: [],
    };
    this.handleGetRecipes = this.handleGetRecipes.bind(this);
  }

  handleGetRecipes = () => {
    const url = `https://lyon-js-2003-pjt3-healthymood-api.jsrover.wilders.dev/recipes/?search=${this.state.currentSearch}`;
    console.log(this.state.currentSearch);
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          recipes: [data],
        });
      });
  };

  handleChange = (event) => {
    this.setState({ currentSearch: event.target.value });
  };

  handleAddfilter = async () => {
    const currentFilter = this.state.filter;
    const newFilter = currentFilter.concat(this.state.currentSearch);
    if (this.state.currentSearch) {
      this.setState({ filter: newFilter, currentSearch: "" });
    }
    this.handleGetRecipes(this.state.filter);
  };

  handleDelete = (str) => {
    const newFilter = this.state.filter.filter((e) => str !== e);
    this.setState({ filter: newFilter });
  };

  handleKeyDown = (event) => {
    // permet d'effectuer la recherche avec entrée
    if (event.key === "Enter" && event.target.value) {
      event.preventDefault();
      const currentSearch = event.target.value;
      this.setState({ currentSearch });
      this.handleAddfilter(currentSearch);
      event.target.blur();
    }
  };

  render() {
    const recipes = this.state.recipes;
    console.log(window.location);
    return (
      <div className="recherche-container">
        <div className="Loupe">
          <h5>Recherche </h5>
          <div className="search-field">
            <div className="filter-list">
              {this.state.filter.map((e) => (
                <p
                  key={e}
                  onClick={() => this.handleDelete(e)}
                  className="filter-name"
                >
                  {e}
                  <img src={Cancel} alt="cancel" />
                </p>
              ))}
            </div>
            <div className="search-block">
              <div className="my-search">
                <label className="label">
                  <p>J'ai envie de : </p>
                </label>
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Rechercher"
                  value={this.state.currentSearch}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <a
                href={`/api/recipes/?search=${this.state.currentSearch}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={this.handleGetRecipes}>
                  <img src={Loupe} alt="search" />
                  Rechercher
                </button>
              </a>
            </div>
            <div className="result">
              <ul>
                {recipes.length === 0 ? (
                  <p>Nothing</p>
                ) : (
                  recipes[0].data.map((recipe) => {
                    return (
                      <li key={recipe.id}>
                        <p>{recipe.name}</p>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
