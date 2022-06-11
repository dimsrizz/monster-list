import { Component } from "react";

import Card from "../card/card.components";

import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        <Card monsters={monsters} />
      </div>
    );
  }
}

export default CardList;
