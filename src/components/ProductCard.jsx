const ProductCard = ({name,price,func}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-secondary-content">
      <figure><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.22tPt9bi1FRyjOYQI8irPQHaD4%26pid%3DApi&f=1&ipt=89bbc5a304f300cb4ea3d449ff05d34096544058079fb05c32d95d3a26e0fdc6&ipo=images" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <p className="text-accent-content text-xl py-2.5">${price}</p>
          <label htmlFor="my-modal-6" className="btn" onClick={()=>func()}>Add to cart</label>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;