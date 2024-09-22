import Main from "./components/main/Main";
import Comics from "./components/comics/Comics";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import ComicsHomePage from "./components/comics/comicsHomePage/comicsHomePage";
import { getData } from "./components/api/api";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const currentUrl = useLocation();

  const [limitComics, setLimitComics] = useState(8);
  const [comics, setComics] = useState([]);
  const [selectorComics, setSelectorComics] = useState([]);

  const [character, setCharacter] = useState([]);
  const [limit, setLimit] = useState(9);
  const [selector, setSelector] = useState([]);

  const [randomCharacter, setRandomCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultCharacter = await getData("characters", limit);
      setCharacter(resultCharacter);
    };

    fetchData();
  }, [limit]);

  useEffect(() => {
    const fetchDataComics = async () => {
      const resultComics = await getData("comics", limitComics);
      setComics(resultComics);
    };

    fetchDataComics();
  }, [limitComics]);

  function addToSelector(id) {
    setSelector(character.filter((item) => item.id === id));
  }

  function addToComicsSelector(id) {
    setSelectorComics(comics.filter((item) => item.id === id));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function setRandom() {
    return setRandomCharacter(character[getRandomInt(character.length)]);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              currentUrl={currentUrl}
              characters={character}
              selector={selector}
              limit={limit}
              setLimit={setLimit}
              addToSelector={addToSelector}
              randomCharacter={randomCharacter}
              setRandom={setRandom}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              currentUrl={currentUrl}
              comics={comics}
              limitComics={limitComics}
              setLimitComics={setLimitComics}
              selectorComics={selectorComics}
              addToComicsSelector={addToComicsSelector}
            />
          }
        />
        <Route
          path="/homepage"
          element={<Homepage currentUrl={currentUrl} selector={selector} />}
        />
        <Route
          path="/homepage/comics"
          element={
            <ComicsHomePage
              currentUrl={currentUrl}
              selectorComics={selectorComics}
            />
          }
        />
      </Routes>
    </>
  );
}

export default React.memo(App);
