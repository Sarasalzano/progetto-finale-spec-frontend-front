import { useEffect, useState } from "react";
//UseParams per leggere l'id dall' URL
import { useParams } from "react-router-dom";

export default function CardDetailPage() {
  const [cityDetail, setCityDetail] = useState(null);

  //Id dall' URL per fare fetch del dettaglio della città
  const { id } = useParams();

  //Useeffect per fare fetch dei dettagli della città quando cambia l'id
  useEffect(() => {
    const fetchSingleCity = async () => {
      try {
        const response = await fetch(`http://localhost:3001/cities/${id}`);
        const data = await response.json();
        setCityDetail(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCity();
  }, [id]);

  return (
    <div className="detailpage-container">
      {cityDetail.map((city) => (
        <header key={city.id}>
          <span>{city.category}</span>
          <h2>{city.title}</h2>
          <span>{city.country}</span>
        </header>
        
      ))}
    </div>
  );
}
