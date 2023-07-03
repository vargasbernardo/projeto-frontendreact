import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader } from "./HomeStyle";

const Home = (props) => {
  // console.log(props)
  const [ordination, setOrdination] = React.useState("");
  
  function handleOrdinationChange(event) {
    setOrdination(event.target.value);
  }

  return (
    <HomeContainer>
      <HomeHeader>
        <h1>Labecommerce</h1>
        <span>
          <p>Ordenação</p>
          <select onChange={handleOrdinationChange} value={ordination}>
            <option>Ordenar</option>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </span>
      </HomeHeader>
      <ProductCard
        produtos={props.produtos}
        ordination={ordination}
        setOrdination={setOrdination}
        handleClick={props.handleClick}
        maxFilter={props.maxFilter}
        searchFilter={props.searchFilter}
        minFilter={props.minFilter}
      />
    </HomeContainer>
  );
};

export default Home;
