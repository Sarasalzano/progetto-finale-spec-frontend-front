export default function CompareAlert({ selectedCities }) {
  return (
    <div className="alert-container">
      {/* Mostra solo i titoli delle città selezionate */}
      {selectedCities.map((city) => (
        <span key={city.id}>{city.title}</span>
      ))}

      {/* Bottone "Compare" (ancora senza logica) */}
      <button>Compare</button>
    </div>
  );
}
