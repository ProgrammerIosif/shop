const Header = ({currPage}) => {
  return (
    <div id="header" className="bg-accent bg-opacity-30 w-full h-24 drop-shadow-lg">
        <div className="container px-4 md:px-4 h-full mx-auto flex justify-between items-center">
          <a className="text-4xl font-bold italic">SHOP</a>

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
              <button className="text-primary-content text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                  onclick="toggleMenu()">
                  &#9776;
              </button>
          </div>
        </div>
    </div>
  );
};

export default Header;