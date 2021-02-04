import React, { useState } from 'react';

const Filters = ({ textFilter, setTextFilter, setFilterBy }) => {
  const [openFilters, setOpenFilters] = useState(false);
  return (
    <>
      <div
        className="show-filters"
        onMouseDown={() => setOpenFilters(!openFilters)}
      >
        <div>{openFilters ? 'hide filters' : 'show filters'}</div>
        <div>{openFilters ? '⇑' : '⇓'}</div>
      </div>
      <div className={openFilters ? 'filters filters-open' : 'filters'}>
        <input
          type="text"
          id="search"
          value={textFilter}
          placeholder="Search"
          onChange={(e) => setTextFilter(e.target.value)}
        />
        <label
          htmlFor="search"
          className="clear-text-filter"
          onMouseDown={() => {
            setTextFilter('');
          }}
        >
          Clear
        </label>
        <span
          onMouseDown={() => {
            setFilterBy('name');
          }}
        >
          sort by name
        </span>
        <span
          onMouseDown={() => {
            setFilterBy('priceLow');
          }}
        >
          sort by price low:high
        </span>
        <span
          onMouseDown={() => {
            setFilterBy('priceHigh');
          }}
        >
          sort by price high:low
        </span>
      </div>
    </>
  );
};

export default Filters;
