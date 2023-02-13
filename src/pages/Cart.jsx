import Header from "../components/Header";
import products from "../products.json";

const Cart = ({addedProducts}) => {
  return (
    <div id="cart">
      <Header currPage="cart"/>
      <ul>
      {products.map((item,idx) => addedProducts[idx] !== undefined ? <li><h1>{item.name}</h1><h2>{addedProducts[idx]}</h2></li> : <></>)}
      </ul>
    </div>
  );
};

export default Cart;