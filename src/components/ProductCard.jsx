import { useState } from 'react'

const ProductCard = ({name,img,price,isAdded,func}) => {
  console.log(isAdded)
  const [added, setAdded] = useState(isAdded);
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-secondary-content z-10">
      <figure className="h-48 bg-[rgb(18,23,73)]"><img src={img} alt="" className=" h-32"/></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <p className="text-secondary-content text-xl py-2.5">${price}</p>
          <label className="btn" onClick={()=>{func(); setAdded(true);}}>{added ? 'Added' : 'Add to cart'}</label>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;