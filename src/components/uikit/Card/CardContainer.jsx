/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Card } from "./Card";
import { useNavigate } from "react-router";
import { SpinnerContainer } from "../Spinner/SpinnerContainer";

function CardContainer({ search, region }) {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const fetchAllCountries = async () => {
    setLoading(true);
    setError(null);
    const fields = [
      "name",
      "flags",
      "capital",
      "region",
      "population",
      "cca3",
    ].join(",");
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
      if (!response.ok) throw new Error(`Failed to fetch countries (status ${response.status})`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
      setError(error.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  // reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, region]);

  if (loading)
    return (
      <div className="center-page">
        <SpinnerContainer />
      </div>
    );
  if (error)
    return (
      <div className="error-state" style={{ textAlign: "center", padding: 24 }}>
        <p>Failed to load countries. {error}</p>
        <button type="button" onClick={fetchAllCountries} className="button" style={{ marginTop: 12 }}>
          Retry
        </button>
      </div>
    );

  const filteredCountries = countries.filter((country) => {
    const matchSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDropdownFilter = region ? country.region === region : true;

    return matchSearch && matchDropdownFilter;
  });

  const totalPages = Math.max(1, Math.ceil(filteredCountries.length / pageSize));
  const start = (currentPage - 1) * pageSize;
  const visible = filteredCountries.slice(start, start + pageSize);

  return (
    <>
      {visible.map((country) => (
        <Card
          onClick={() => navigate(`/countries/${encodeURIComponent(country.name.official)}`)}
          key={country.cca3}
          img={country.flags.png}
          name={country.name.common}
          capital={country.capital?.[0] || "N/A"}
          region={country.region}
          population={country?.population?.toLocaleString?.() || "N/A"}
        />
      ))}
      {/* Pagination Controls */}
      <div className="pagination">
        <button
          type="button"
          className="button"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          className="button"
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export { CardContainer };
