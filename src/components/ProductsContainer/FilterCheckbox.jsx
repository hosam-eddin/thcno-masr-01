import React from "react";

const FilterCheckbox = ({ checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      In Stock
    </label>
  );
};

export default FilterCheckbox;
