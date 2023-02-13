import { useEffect } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Modal from '../components/Modal'
import products from '../products.json'

const Shop = ({handleUpdate}) => {

  const addProductToCart = (productIndex) => {
    handleUpdate(productIndex);
  } 

  return (
    <div id="shop" className="bg-accent">
      <Header currPage="shop" />
      <ul className="py-10 flex justify-center items-center flex-wrap gap-40">
        {products.map((product,idx) => <ProductCard name={product.name} price={product.price} func={()=>addProductToCart(idx)} key={idx}/>)}
      </ul>
      <Modal />
    </div>
  );
};

export default Shop;