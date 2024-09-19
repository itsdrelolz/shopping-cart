import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-lg font-bold">
        <Link to="/">Home</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/shopping" className="hover:text-gray-300">
          Shop
        </Link>
        <Link to="/cart" className="hover:text-gray-300">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;