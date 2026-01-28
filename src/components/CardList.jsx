import Card from "./Card";

export default function CardList({
  searchedCities,
  selectedCities,
  setSelectedCities,
  handleSelectCity
}) {
  return (
    <div className="card-row">
      <Card
        searchedCities={searchedCities}
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        handleSelectCity={handleSelectCity}
      />
    </div>
  );
}
