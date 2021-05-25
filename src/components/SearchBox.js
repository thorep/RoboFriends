import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue w-25"
        type="search"
        placeholder="Search robots"
      />
    </div>
  );
};

export default SearchBox;
