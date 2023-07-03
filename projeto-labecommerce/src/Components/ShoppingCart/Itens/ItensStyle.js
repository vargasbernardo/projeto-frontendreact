import styled from "styled-components";

const CartItem = styled.div`
  color: var(--primary-text-color);
  display: flex;
  flex-direction: column;
  .deleteIcon {
    width: 14px;
    height: 14px;
    align-self: center;
    color: red;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
  }
  p {
    max-width: 50%;
  }
`;

export default CartItem;
