import "./card.css";

function Card({ name, img, index, addToSelector, id }) {
  return (
    <li key={Date.now()} className="card" onClick={() => addToSelector(id)}>
      <img src={img} alt="" width={200} height={200} />
      <div> {name} </div>
    </li>
  );
}

export default Card;
