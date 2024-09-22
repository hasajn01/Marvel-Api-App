import { Link } from "react-router-dom";

function Comicard({ title, price, img, addToComicsSelector, id }) {
  return (
    <Link to={"/homepage/comics"}>
      <li
        key={Date.now()}
        className="comicard"
        onClick={() => addToComicsSelector(id)}
      >
        <img src={img} alt="comicsimage" width={225} height={346} />
        <h3>{title}</h3>
        <p>{price}$</p>
      </li>
    </Link>
  );
}

export default Comicard;
