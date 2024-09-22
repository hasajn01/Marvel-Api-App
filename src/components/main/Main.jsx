import Header from "../header/Header";
import "./main.scss";
import Collage from "./mini-component/Collage";
import Card from "../card/Card";
import { Link } from "react-router-dom";

function Main({
  currentUrl,
  characters,
  selector,
  limit,
  setLimit,
  addToSelector,
  randomCharacter,
  setRandom,
}) {
  return (
    <>
      <div className="wrapper">
        <Header currentUrl={currentUrl} />
        <Collage
          randomCharacter={randomCharacter}
          setRandom={setRandom}
          addToSelector={addToSelector}
        />

        <div
          className="content"
          style={
            characters.length === 0 ? { display: "none" } : { display: "flex" }
          }
        >
          <ul className="characterUl">
            {characters.map((character, index) => {
              return (
                <Card
                  name={character.name}
                  img={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  index={index}
                  addToSelector={addToSelector}
                  id={character.id}
                />
              );
            })}
          </ul>

          <div className="select-info">
            {selector.length === 0 ? (
              <div className="select-info-contain">
                <div>
                  <div>Please select a character to see information</div>
                  <img
                    src="/assets/img/Skeleton.png"
                    alt=""
                    className="skeleton"
                  />
                </div>
              </div>
            ) : (
              <div className="select-info-contain-choosed">
                {selector.map((character) => {
                  return (
                    <>
                      <div className="character-info-choosed">
                        <img
                          src={
                            character.thumbnail.path +
                            "." +
                            character.thumbnail.extension
                          }
                          alt="img"
                          width={150}
                          height={150}
                        />
                        <div className="block-2">
                          <h3>{character.name}</h3>
                          <Link to="/homepage" className="homepage-btn">
                            <div>HOMEPAGE</div>
                          </Link>

                          <a
                            href={character.urls[1].url}
                            target="_blank"
                            rel="noreferrer"
                            className="wiki-btn"
                          >
                            <div>WIKI</div>
                          </a>
                        </div>
                      </div>

                      <div>
                        {character.description
                          ? character.description
                          : "Not have descritption"}
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* <img src="/assets/img/bg-asset.png" alt="bg-assets" className="bgAsset"/>  */}
        </div>

        <div className="button-loadMore">
          <button onClick={() => setLimit(limit + 3)}>LOAD MORE</button>
        </div>
      </div>
    </>
  );
}

export default Main;
