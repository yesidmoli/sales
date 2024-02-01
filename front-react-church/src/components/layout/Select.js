import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "cliente1", label: "Cliente 1" },
  { value: "cliente2", label: "Cliente 2" },
  { value: "cliente3", label: "Cliente 3" },
  // Agrega más opciones según sea necesario
];

const SearchableSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}
      placeholder="Buscar cliente..."
    />
  );
};

export default SearchableSelect;