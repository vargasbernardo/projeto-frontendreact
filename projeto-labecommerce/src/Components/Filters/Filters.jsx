import { FilterStyle } from "./FiltersStyle";
import sandwichIcon from "../../assets/Icons/sandwichIcon.png";
import React from "react";

const Filters = (props) => {
  // console.log(props)
  const [filterModal, setFilterModal] = React.useState(false);
  console.log(filterModal);

  function handleModalOpen() {
    setFilterModal((prevState) => !prevState);
  }

  return (
    <FilterStyle>
      <img src={sandwichIcon} onClick={handleModalOpen} />

      {filterModal && (
        <>
          <h3>Filtros</h3>

          <label htmlFor="minFilter">Valor mínimo</label>
          <input
            onChange={(e) =>
              e.target.value > 0
                ? props.setMinFilter(e.target.value)
                : props.setMinFilter("")
            }
            value={props.minFilter}
            type="number"
            name="minFilter"
          />

          <label htmlFor="maxFilter">Valor máximo</label>
          <input
            onChange={(e) =>
              e.target.value > 0
                ? props.setMaxFilter(e.target.value)
                : props.setMaxFilter("")
            }
            value={props.maxFilter}
            type="number"
            name="maxFilter"
          />

          <label htmlFor="searchFilter">Busca por nome</label>
          <input
            onChange={(e) => props.setSearchFilter(e.target.value)}
            value={props.searchFilter}
            type="text"
            name="searchFilter"
          />
        </>
      )}
    </FilterStyle>
  );
};

export default Filters;
