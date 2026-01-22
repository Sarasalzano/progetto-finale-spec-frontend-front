import { useEffect, useState } from "react";
//UseParams per leggere l'id dall' URL
import { useParams } from "react-router-dom";
import CityStats from "../components/CityStats";
import CostOfliving from "../components/CostOfLiving";
import SafetyandClimate from "../components/SafetyandClimate";
import BestTimeToMove from "../components/BestTimeToMove";
import Highlights from "../components/Highlights";
import Amenities from "../components/Amenities";

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

      {/* Rating, Money per Day, Temperature */}
      <CityStats cityDetail={cityDetail} />
      <div className="info-section-row">
        {/* Cost della vita */}
        <CostOfliving cityDetail={cityDetail} />

        {/* Sicurezza e clima */}
        <SafetyandClimate cityDetail={cityDetail} />
      </div>

      {/* Miglior momento per trasferirsi */}
      <BestTimeToMove cityDetail={cityDetail} />

      {/* Highlights */}
      <Highlights cityDetail={cityDetail} />

      {/* Amenities */}
      <Amenities cityDetail={cityDetail} />
    </div>
  );
}
