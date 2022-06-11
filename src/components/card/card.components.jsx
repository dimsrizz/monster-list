import "./card.style.css";

const Card = (props) => {
  const { monsters } = props;

  return monsters.map((monster) => {
    const { id, name, email } = monster;
    return (
      <div key={id} className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  });
};

export default Card;
