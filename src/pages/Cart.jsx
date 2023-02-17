import Header from "../components/Header";
import products from "../products.json";

const Cart = ({addedProducts}) => {
  return (
    <div id="cart">
      <Header currPage="cart"/>
      <h1 className="my-20 text-center text-5xl font-bold">YOUR STACK</h1>
      <div className="p-0 md:p-10 flex flex-col items-center gap-12">
        {products.map((item,idx) => !(addedProducts[idx] !== undefined) ? <></> :
            <div className="w-5/6 xs:w-4/6
                            md-px-20">
              <div className="divider mb-16"></div> 
              <div className="float-left w-28 lg:w-56 h-28 lg:h-56 p-0 flex items-center justify-center"> <img src={item.img} alt="" /> </div>
              <div className="float-right h-full xs:w-1/3 sm:w-1/4  flex justify-center gap-4">
                <div className="hidden md:block">
                  <h6>NAME</h6>
                  <h6>PRICE</h6>
                  <h6>QUANTITY</h6>
                </div>
                <div>
                  <h6>{item.name}</h6>
                  <h6>${item.price}</h6>
                  <h6>{addedProducts[idx]}</h6>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Cart;