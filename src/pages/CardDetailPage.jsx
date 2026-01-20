import { useEffect, useState } from "react";
//UseParams per leggere l'id dall' URL
import { useParams } from "react-router-dom";
import CityStats from "../components/CityStats";

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
        setCityDetail(data.city);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCity();
  }, [id]);

  return (
    <div className="detailpage-container">
      {/* `?.` evita errori se cityDetail è ancora null (dati non caricati) */}
      <header key={cityDetail?.id}>
        <span>{cityDetail?.category}</span>
        <h2>{cityDetail?.title}</h2>
        <span>{cityDetail?.country}</span>
      </header>
      <CityStats cityDetail={cityDetail} />
    </div>
  );
}
