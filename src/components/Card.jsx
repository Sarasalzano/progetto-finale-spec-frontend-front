import React from "react";

export default function Card({ cities }) {
  return (
    <div className="cards-container">
      {cities.map((city) => (
        <div className="card" key={city.id}>
          <div className="img-wrapper">
            <img src={city.image} alt={city.title} />
          </div>
          <div className="text-container">
            <h3>{city.title}</h3>
            <span>{city.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
