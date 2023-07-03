import { CardContainer } from "./ProductCardStyle";




const ProductCard = (props) => {
  console.log(typeof props.minFilter)
  console.log(typeof props.maxFilter)
  
  const productData = props.produtos
    .filter((element) => {
      console.log(typeof element.value)
      return element.name
        .toLowerCase()
        .includes(props.searchFilter.toLowerCase());
    })
    .filter((element) => {
      return props.minFilter ? Number(element.value) >= Number(props.minFilter) : true;
    })
    .filter((element) => {
      return props.maxFilter ? Number(element.value) <= Number(props.maxFilter) : true;
    })
    .sort((a, b) => {
      if (props.ordination === "Crescente") {
        return a.name.localeCompare(b.name);
      } else if (props.ordination === "Decrescente") {
        return b.name.localeCompare(a.name);
      }
    })
    .map((element, index) => {
      // console.log(element);
      return (
        <div key={element.id}>
          <img src={element.imageUrl} />
          <span>
            <p>{element.name}</p>

            <hr />

            <p>R$ {element.value}</p>

            <button onClick={() => props.handleClick(element)}>
              Adicionar ao carrinho
            </button>
          </span>
        </div>
      );
    });

  return <CardContainer>{productData}</CardContainer>;
};

export default ProductCard;
