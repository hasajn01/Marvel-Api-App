import Header from "../../header/Header";
import { Mini } from "../mini-component/mini-comp";

function ComicsHomePage({ currentUrl, selectorComics }) {
  return (
    <div className="wrapper">
      <Header currentUrl={currentUrl} />
      <Mini />
      {selectorComics ? (
        selectorComics.map((comics) => {
          return (
            <div style={{ marginTop: 50, display: "flex" }}>
              <img
                src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                alt="character"
                width={293}
                height={293}
              />

              <div
                style={{
                  marginLeft: 50,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h2>{comics.title}</h2>
                <p>
                  {comics.description
                    ? comics.description
                    : "Not have any description"}
                </p>
                <p>{comics.pageCount} pages</p>
                <p>Language: en-us</p>
                <h4 style={{ color: "#9F0013" }}>
                  {comics.prices[0].price !== 0
                    ? comics.prices[0].price
                    : "NOT AVAILABLE"}
                </h4>
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

export default ComicsHomePage;
