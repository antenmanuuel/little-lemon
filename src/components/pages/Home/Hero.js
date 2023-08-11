import { Link } from "react-router-dom";
import image from "./assets/restaurant-food.jpg";
import "./Hero.css";
import links from "../../../utils/links";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Link className="button-primary" to={links.get("bookings".path)}>
            Reserve a table
          </Link>
        </div>
        <img className="hero-image" src={image} alt="Restaurant food" />
      </div>
    </section>
  );
};
export default Hero;
