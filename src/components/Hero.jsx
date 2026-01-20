import HeroLogo from "../assets/location-picture-big.png";

export default function Hero() {
  return (
    <div className="hero-content">
      <h1>Work Anywhere. Live Everywhere.</h1>
      <p>
        Compare cost of living, safety, climate, and lifestyle to choose your
        ideal city.
      </p>
      <img src={HeroLogo} alt="location icon" className="hero-icon" />
    </div>
  );
}
