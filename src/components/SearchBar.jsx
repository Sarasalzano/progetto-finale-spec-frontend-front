export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
