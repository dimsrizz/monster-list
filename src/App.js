import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({
          monsters: users,
        });
      });
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase().trim();

    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // includes method always return true if string input is ""
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="search-box"
          placeholder="search monster..."
          onChangeHandler={onSearchChange}
        />

        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
