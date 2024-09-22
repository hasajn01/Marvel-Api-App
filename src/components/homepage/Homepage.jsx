import Header from "../header/Header";
import { Mini } from "../comics/mini-component/mini-comp";

function Homepage({ currentUrl, selector }) {
  return (
    <div className="wrapper">
      <Header currentUrl={currentUrl} />
      <Mini />
      {selector ? (
        selector.map((character) => {
          return (
            <div style={{ marginTop: 50 }}>
              <div style={{ display: "flex" }}>
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt="character"
                  width={293}
                  height={293}
                />

                <div style={{ marginLeft: 50 }}>
                  <h3>{character.name}</h3>
                  <div style={{ marginTop: 25 }}>
                    {character.description
                      ? character.description
                      : "Not have any Description"}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>404 PAGE NOT FOUND</div>
      )}
    </div>
  );
}

export default Homepage;
