import { Link } from "react-router-dom";

export default function Card({ sortedCities }) {
  return (
    <div className="cards-container">
      {sortedCities?.map((city) => (
        <Link to={`/cities/${city?.id}`} key={city?.id} className="card">
          <div className="text-container">
            <h3>{city?.title}</h3>
            <span>{city?.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
