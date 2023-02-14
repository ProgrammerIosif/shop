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
    <div id="shop" className="h-full bg-fixed bg-cover bg-center bg-[url('https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/shutterstock_407554567.jpg')]">
      <Header currPage="shop" />
      <ul className="py-10 flex justify-center items-center flex-wrap gap-40">
        {products.map((product,idx) => <ProductCard name={product.name} img={product.img} isAdded={cart[idx] !== undefined ? true : false} price={product.price} func={()=>addProductToCart(idx)} key={idx}/>)}
      </ul>
      <Modal />
    </div>
  );
};

export default Shop;