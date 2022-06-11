import { Component } from "react";

import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;

    return (
      <input
        onChange={onChangeHandler}
        type="search"
        className={className}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBox;
