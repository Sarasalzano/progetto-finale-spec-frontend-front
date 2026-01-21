export default function CostOfliving({ cityDetail }) {
  return (
    <div className="costofliving-container">
      <h4>Cost of Living</h4>
      <div className="details-content">
        <span>Monthly Cost</span>
        <span>{cityDetail?.costOfLiving}</span>
      </div>
      <div className="details-content">
        <span>Average Rent</span>
        <span>{cityDetail?.avgRent}</span>
      </div>
    </div>
  );
}
