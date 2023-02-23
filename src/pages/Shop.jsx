import { useEffect } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Modal from '../components/Modal'
import products from '../products.json'

const Shop = ({cart,handleUpdate}) => {

  const addProductToCart = (productIndex) => {
    handleUpdate(productIndex);
  } 

  return (
    <div id="shop" className="h-full">
      <Header currPage="shop" />
      <h1 className="my-12 text-center text-6xl font-bold">SHOP</h1>
      <ul className="flex justify-center items-center flex-wrap gap-40">
        {products.map((product,idx) => <ProductCard name={product.name} img={product.img} isAdded={cart[idx] !== undefined ? true : false} price={product.price} func={()=>addProductToCart(idx)} key={idx}/>)}
      </ul>
      <Modal />
    </div>
  );
};

export default Shop;