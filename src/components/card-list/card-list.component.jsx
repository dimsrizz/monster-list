import Card from "../card/card.components";

import "./card-list.style.css";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      <Card monsters={monsters} />
    </div>
  );
};

export default CardList;
