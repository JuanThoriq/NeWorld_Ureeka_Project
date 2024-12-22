// import PropTypes from "prop-types";
import "./Card.css";
/* eslint-disable react/prop-types */

function Card({ img, name, capital, region, population, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="country-img">
        <img src={img} alt={name} />
      </div>
      <div className="country-information">
        <h3 className="country-name">{name}</h3>
        <div className="country-detail">
          <p className="capital">Capital: {capital}</p>
          <p className="region">Region: {region}</p>
          <p className="population">Population: {population}</p>
        </div>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   capital: PropTypes.string.isRequired,
//   region: PropTypes.string.isRequired,
//   population: PropTypes.string.isRequired,
// };

export { Card };
