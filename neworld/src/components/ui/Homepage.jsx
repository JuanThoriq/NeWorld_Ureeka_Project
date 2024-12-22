import { useNavigate } from "react-router";
import heroImg from "../../assets/homepage-hero.jpg";
import { Button } from "../uikit/Button/Button";

function Homepage() {
  const navigate = useNavigate();

  const goToCountriesPage = () => {
    return navigate(`/countries`);
  };

  return (
    <>
      <section className="homepage-container">
        <div className="homepage-hero">
          <div className="hero-img">
            <img src={heroImg} alt="" />
          </div>
          <div className="hero-overlay">
            <h1 className="overlay-header">NEWORLD</h1>
            <h2 className="overlay-sub-header">Explore The Nations</h2>
            <Button
              text={"Explore Now"}
              onClick={goToCountriesPage}
              className="homepage-button"
            />
          </div>
        </div>
        {/* <div className="homepage-most-populations">
          <h2 className="most-population-header">Most Populations Countries</h2>
        </div> */}
      </section>
    </>
  );
}

export { Homepage };
