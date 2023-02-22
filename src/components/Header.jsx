import {useState} from "react";

const Header = ({currPage}) => {
  const [menuDisplay, setmenuDisplay] = useState(true);
  const [displayMenuStyle, setdisplayMenuStyle] = useState('');

  const showMenu = () => {
    setmenuDisplay(!menuDisplay)
    if (menuDisplay) {
      setdisplayMenuStyle('')
    } else {
      setdisplayMenuStyle('none')
    }
    return displayMenuStyle;
  }
  
  return (
    <div id="header" className="bg-opacity-40 w-full h-24 drop-shadow-lg">
        <div className="container px-4 md:px-4 h-full mx-auto flex justify-between items-center">
          <a className="text-4xl font-bold italic">BUILD-A-STACK</a>

          <ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 z-50
              md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">
              <li>
                  <a className={`${currPage === 'home' ? 'text-neutral-content' : 'text-primary-content'}
                                pr-12 text-2xl hover:text-neutral-content duration-300`} href='/shop/'
                     onClick={e => currPage === 'home' ? e.preventDefault() : {}}>Home</a>
              </li>
              <li>
                  <a className={`${currPage === 'shop' ? 'text-neutral-content' : 'text-primary-content'}
                                pr-12 text-2xl hover:text-neutral-content duration-300`} href='/shop/#/shop'
                     onClick={e => currPage === 'shop' ? e.preventDefault() : {}}>Shop</a>
              </li>
              <li>
                  <a className={`${currPage === 'home' ? 'text-neutral-content' : 'text-primary-content'}
                                text-primary-content opacity-70 hover:opacity-100 hover:text-neutral-content duration-300"`} href="/shop/#/cart"
                     onClick={e => currPage === 'cart' ? e.preventDefault() : {}}>
                    <img className="pl-3 h-8" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
                  </a>
              </li>
          </ul>

          <div className="flex items-center md:hidden">
            <label className="btn btn-circle swap swap-rotate dropdown dropdown-bottom dropdown-end">
              <input type="checkbox" onClick={showMenu}/>
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
              <ul style={{ display: displayMenuStyle}} tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a href="/shop">HOME</a></li> 
                <li><a href="/shop/#/shop">SHOP</a></li>
                <li><a href="/shop/#/cart">CART</a></li>
              </ul>
            </label>
          </div>
        </div>
    </div>
  );
};

export default Header;