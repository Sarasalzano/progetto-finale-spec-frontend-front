import { Link } from "react-router-dom";

export default function Card({ searchedCities, handleSelectCity }) {
  return (
    <div className="cards-container">
      {searchedCities?.map((city) => (
        <div key={city.id} className="card">
          <Link to={`/cities/${city.id}`} className="text-container">
            <h3>{city.title}</h3>
            <span>{city.category}</span>
          </Link>
          <div className="card-actions">
            {/* al click seleziona o deseleziona questa specifica città per il confronto */}
            <button onClick={()=> handleSelectCity(city)}>Compare</button>
            <button>Favourites</button>
          </div>
        </div>
      ))}
    </div>
  );
}
