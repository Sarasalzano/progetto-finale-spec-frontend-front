export default function CityStats({ cityDetail }) {
  return (
    <div className="city-stats-row">
      <div className="city-stats-card">
        {/* ?. evita errori se cityDetail è ancora null (dati non caricati) */}
        <h2>{cityDetail?.rating}</h2>
        <span>Rating</span>
      </div>
      <div className="city-stats-card">
        <h2>{cityDetail?.moneyPerDay}</h2>
        <span>Per Day</span>
      </div>
      <div className="city-stats-card">
        <h2>{cityDetail?.avgTemps}</h2>
        <span>Avg Temp</span>
      </div>
    </div>
  );
}
