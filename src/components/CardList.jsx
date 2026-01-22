import Card from "./Card";

export default function CardList({ searchedCities }) {
  return (
    <div className="card-row">
      <Card searchedCities={searchedCities} />
    </div>
  );
}
