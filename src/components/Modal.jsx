const Modal = () => {

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">The product was added to your cart!</h3>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;