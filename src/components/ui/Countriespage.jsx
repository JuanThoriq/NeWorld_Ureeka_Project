import { useState } from "react";
import searchIcon from "../../assets/search-solid.svg";
import { CardContainer } from "../uikit/Card/CardContainer";
// import dropdownIcon from "../../assets/chevron-down-solid.svg";

function Countriespage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const searchBar = (e) => setSearch(e.target.value);
  const dropdownFilter = (e) => setRegion(e.target.value);

  return (
    <>
      <section className="countries-page-section">
        <div className="countries-page-top-section">
          <div className="search-bar">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="search-bar-icon"
            />
            <input
              type="text"
              className="search-bar-input"
              value={search}
              onChange={searchBar}
              placeholder="Search country..."
            />
          </div>
          <div className="dropdown-filter">
            {/* <img
              src={dropdownIcon}
              alt="Dropdown Icon"
              className="dropdown-filter-icon"
            /> */}
            <select
              name=""
              className="dropdown-filter-select"
              onChange={dropdownFilter}
              value={region}
            >
              <option value="">All Regions </option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Americas">America</option>
            </select>
          </div>
        </div>

        <div className="countries-page-bottom-section">
          <CardContainer search={search} region={region} />
        </div>
      </section>
    </>
  );
}

export { Countriespage };
