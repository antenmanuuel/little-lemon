import imageA from "../Home/assets/chefs-mario-and-adrian_a.jpg";
import imageB from "../Home/assets/chefs-mario-and-adrian_b.jpg";
import "./index.css";

const About = () => {
  return (
    <section className="container grid about">
      <div className="about-description">
        <h1>About Us</h1>
        <h2>Based in Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
          aliquam sem et tortor consequat id porta. Donec ultrices tincidunt
          arcu non sodales neque sodales. Volutpat ac tincidunt vitae semper
          quis lectus. Vivamus arcu felis bibendum ut. Tellus id interdum velit
          laoreet id donec ultrices tincidunt arcu. Sociis natoque penatibus et
          magnis dis parturient. Venenatis a condimentum vitae sapien
          pellentesque habitant morbi tristique. Fermentum leo vel orci porta.
          Scelerisque viverra mauris in aliquam sem fringilla ut. In hac
          habitasse platea dictumst quisque sagittis. Accumsan tortor posuere ac
          ut consequat semper viverra nam libero. Est placerat in egestas erat
          imperdiet sed euismod nisi. Nisl rhoncus mattis rhoncus urna neque
          viverra justo nec. Massa placerat duis ultricies lacus sed turpis.
          Amet consectetur adipiscing elit duis tristique. Vulputate sapien nec
          sagittis aliquam malesuada.
        </p>
      </div>
      <div className="about-chefs">
        <img src={imageA} alt="Chefs Mario and Adrian" />
        <img src={imageB} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default About;