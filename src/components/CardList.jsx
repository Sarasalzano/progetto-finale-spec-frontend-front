import Card from "./Card";

export default function CardList({ sortedCities }) {
  return (
    <div className="card-row">
      <Card sortedCities={sortedCities } />
    </div>
  );
}
