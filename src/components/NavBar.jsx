import { Link } from "react-router-dom";
import Image from "/icons8-cart-50.png";

const NavBar = () => {
  const img = Image;

  return (
    <nav className="fixed flex flex-row items-center  justify-between w-full max-w-screen-2xl mx-auto font-sans text-lg px-4 py-4 bg-gray-700 text-white shadow-lg top-0 left-0 right-0 opacity-95">
      <div>
        <Link
          to="/"
          className="border-transparent hover:border-solid hover:border-white border-2 transition-all duration-300 border-spacing-2 px-1 basis-1/3 text-2xl"
        >
          Some Shopping Website
        </Link>
      </div>
      <div className="basis-2/3 flex justify-end">
        <Link
          to="shopping"
          className="border-transparent hover:border-solid hover:border-white border-2 transition-all duration-300 border-spacing-4 px-1"
        >
          Shop
        </Link>
        <Link
          to="cart"
          className="border-transparent hover:border-solid hover:border-white border-2 transition-all duration-300 border-spacing-4 px-1"
        >
          <img className="size-6" src={img} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
