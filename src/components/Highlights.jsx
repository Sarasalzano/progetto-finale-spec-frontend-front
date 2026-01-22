export default function Highlights({ cityDetail }) {
  return (
    <div className="outer-container">
      <h4>Highlights</h4>
      {/* map dell'array highlights dentro l'oggetto cityDetail */}
      <ul>
        {cityDetail?.highlights?.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
