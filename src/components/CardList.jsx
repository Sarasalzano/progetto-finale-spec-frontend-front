import Card from "./Card";
import { useEffect, useState } from "react";

export default function CardList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3001/cities");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="card-row">
      <Card cities={cities} />
    </div>
  );
}
