import Header from "../header/Header";
import { Mini } from "./mini-component/mini-comp";
import Comicard from "./comic-card/Comicard";

function Comics({
  currentUrl,
  comics,
  limitComics,
  setLimitComics,
  selectorComics,
  addToComicsSelector,
}) {
  return (
    <div className="wrapper">
      <Header currentUrl={currentUrl} />
      <Mini />
      <ul className="comicsUl">
        {comics.map((item) => {
          return (
            <Comicard
              title={item.title}
              price={
                item.prices[0].price !== 0
                  ? item.prices[0].price
                  : "NOT AVAILABLE"
              }
              img={item.thumbnail.path + "." + item.thumbnail.extension}
              addToComicsSelector={addToComicsSelector}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Comics;
