/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Card } from "./Card";
import { useNavigate } from "react-router";

function CardContainer({ search, region }) {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDropdownFilter = region ? country.region === region : true;

    return matchSearch && matchDropdownFilter;
  });

  return (
    <>
      {filteredCountries.map((country) => (
        <Card
          onClick={() => navigate(`/countries/${country.name.official}`)}
          key={country.cca3}
          img={country.flags.png}
          name={country.name.common}
          capital={country.capital?.[0] || "N/A"}
          region={country.region}
          population={country?.population.toLocaleString() || "N/A"}
        />
      ))}
    </>
  );
}

export { CardContainer };
