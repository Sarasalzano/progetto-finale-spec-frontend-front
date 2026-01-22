export default function CityControls({ setCategories, order, setOrder }) {
  return (
    <div className="controls-container">
      <div className="btn-container">
        <button onClick={() => setCategories("")}>All</button>
        <button onClick={() => setCategories("Beaches")}>Beaches</button>
        <button onClick={() => setCategories("Cities")}>Cities</button>
        <button onClick={() => setCategories("Mountains")}>Mountains</button>
      </div>
      <div className="select-container">
        <select
          // valore corrente della select (default A-Z)
          value={order}
          // al cambio della select, aggiorna lo stato Order
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="Name: A-Z">Name: A-Z</option>
          <option value="Name: Z-A">Name: Z-A</option>
        </select>
      </div>
    </div>
  );
}
