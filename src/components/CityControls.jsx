export default function CityControls() {
  return (
    <div className="controls-container">
      <div className="btn-container">
        <button>All</button>
        <button>Beaches</button>
        <button>Cities</button>
        <button>Mountains</button>
      </div>
      <div className="select-container">
        <select>
          <option value="Name: A-Z">Name: A-Z</option>
          <option value="Name: Z-A">Name: Z-A</option>
        </select>
      </div>
    </div>
  );
}
