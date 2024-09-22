import "./header.css";
import { Link } from "react-router-dom";

function Header({ currentUrl }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <span style={{ color: "#9F0013" }}>Marvel</span> information portal
      </div>

      <div style={{ display: "flex" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className={
              currentUrl.pathname === "/" ? "currentUrl red" : "currentUrl"
            }
          >
            Characters
          </div>
        </Link>

        <div style={{ marginLeft: 5, marginRight: 5 }}>/</div>

        <Link to="/comics" style={{ textDecoration: "none" }}>
          <div
            className={
              currentUrl.pathname === "/comics"
                ? "currentUrl red"
                : "currentUrl"
            }
          >
            Comics
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
