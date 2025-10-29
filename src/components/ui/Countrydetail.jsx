import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SpinnerContainer } from "../uikit/Spinner/SpinnerContainer";
// import LeafletMapComponent from "../uikit/Maps/Maps";

function Countrydetail() {
  const { name } = useParams();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataCountry = async () => {
      setLoading(true);
      setError(null);
      try {
        const fields = [
          "name",
          "flags",
          "languages",
          "region",
          "timezones",
          "population",
          "capital",
          "currencies",
        ].join(",");
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true&fields=${fields}`
        );
        if (!response.ok) throw new Error("Failed to fetch country");
        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) throw new Error("Country not found");
        setCountry(data[0]);
      } catch (error) {
        console.log(error);
        setError(error.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchDataCountry();
  }, [name]);

  if (loading)
    return (
      <div className="center-page">
        <SpinnerContainer />
      </div>
    );
  if (error)
    return (
      <div className="error-state" style={{ textAlign: "center", padding: 24 }}>
        <p>Error: {error}</p>
      </div>
    );
  //   const { latlng } = country; // Ambil koordinat lat dan lng dari API

  return (
    <>
      <section className="country-detail-page">
        <h2 className="country-detail-header">{country.name.official}</h2>
        <div className="country-detail-body">
          <div className="country-detail-left">
            <div className="card">
              <div className="country-img">
                <img src={country.flags.png} alt={country.name.common} />
              </div>
              <div className="country-information">
                <h3 className="country-name">{country.name.common}</h3>
                <div className="country-detail">
                  <p className="capital">
                    Capital: {country.capital?.[0] || "N/A"}
                  </p>
                  <p className="language">
                    Language:{" "}
                    {Object.values(country.languages || {}).join(", ")}
                  </p>
                  <p className="region">Region: {country.region}</p>
                  <p className="population">
                    Population: {country?.population?.toLocaleString?.() || "N/A"}
                  </p>
                  <p className="currency">
                    Currency: {Object.values(country.currencies || {})[0].name}
                  </p>
                  <p className="timezone">
                    Time Zone: {country.timezones?.[0] || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="country-detail-right">
            {/* <LeafletMapComponent lat={latlng[0]} lng={latlng[1]} /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export { Countrydetail };
