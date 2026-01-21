export default function SafetyandClimate({ cityDetail }) {
  return (
    <div className="safetyandclimate-container">
      <h4>Safety & Climate</h4>
      <div className="details-content">
        <span>Safety Rating</span>
        <span>{cityDetail?.safetyRating}</span>
      </div>
      <div className="details-content">
        <span>Climate</span>
        <span>{cityDetail?.climate}</span>
      </div>
    </div>
  );
}
