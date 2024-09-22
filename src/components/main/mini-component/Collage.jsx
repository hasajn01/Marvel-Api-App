import "./collage.scss";
import { Link } from "react-router-dom";

function Collage({ randomCharacter, setRandom, addToSelector }) {
  return (
    <div className="collage">
      <div className="random-character">
        {randomCharacter.length !== 0 ? (
          <div style={{ display: "flex", padding: 40 }}>
            <img
              src={
                randomCharacter.thumbnail.path +
                "." +
                randomCharacter.thumbnail.extension
              }
              alt="random-character"
              width={180}
              height={180}
            />
            <div style={{ marginLeft: 30 }}>
              <h2 style={{ marginBottom: 10 }}>{randomCharacter.name}</h2>
              <p>
                {randomCharacter.description
                  ? randomCharacter.description
                  : "Not have any Description"}
              </p>
              <div style={{ marginTop: 40 }}>
                <Link to={"/homepage"}>
                  <button
                    onClick={() => addToSelector(randomCharacter.id)}
                    style={{
                      marginRight: 10,
                      backgroundColor: "#9F0013",
                      color: "white",
                      border: "none",
                      width: 101,
                      height: 38,
                    }}
                  >
                    HOMEPAGE
                  </button>
                </Link>
                <a
                  href={randomCharacter.urls[1].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <button
                    style={{
                      marginRight: 10,
                      backgroundColor: "#5C5C5C",
                      color: "white",
                      border: "none",
                      width: 101,
                      height: 38,
                    }}
                  >
                    WIKI
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="random-character-choose">
        <div className="contain">
          <div className="block-1">
            <div>
              Random character for today! <br />
              Do you want to get to know him better?
            </div>

            <div>
              <div style={{ marginBottom: 20 }}>Or choose another one</div>

              <div>
                <button onClick={() => setRandom()}>TRY IT</button>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/assets/icon/decoration.png"
              alt=""
              width={202.54}
              height={189}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
