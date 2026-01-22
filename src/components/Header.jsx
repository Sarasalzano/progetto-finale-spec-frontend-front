import Logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

export default function Header({ search, setSearch }) {
  return (
    <header>
      <div className="header-row">
        <div className="header-col-left">
          <img src={Logo} alt="app logo" />
          <h2>Wanderlust</h2>
        </div>
        <div className="header-col-center">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="header-col-right">
          <button>Favorites</button>
        </div>
      </div>
    </header>
  );
}
