import { Link } from "react-router-dom";

export default function Card({ cities }) {
  return (
    <div className="cards-container">
      {cities.map((city) => (
        <Link to={`/carddetail/${city.id}`} key={city.id} className="card">
          <div className="text-container">
            <h3>{city.title}</h3>
            <span>{city.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
