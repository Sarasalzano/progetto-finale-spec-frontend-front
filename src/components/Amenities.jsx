export default function Amenities({ cityDetail }) {
  return (
    <div className="outer-container">
      <h4>Amenities</h4>
      {/* map dell'array amenities dentro l'oggetto cityDetail */}
      <ul>
        {cityDetail?.amenities?.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}
