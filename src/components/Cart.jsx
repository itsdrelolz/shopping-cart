import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice, totalItemCount, handleIncreaseItemCount, handleDecreaseItemCount } = useOutletContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  {cartItems.length === 0 ? (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 text-center">
      <h1 className="text-lg font-semibold mb-4">
        Your cart is empty! Click below to start shopping!
      </h1>
      <Link 
        to="/shopping" 
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-200"
      >
        Shop Now
      </Link>
    </div>

      ) : (
        <div className="flex flex-col items-center w-full">
          {/* Cart Items List */}
          <div className="flex flex-col items-center h-80 overflow-y-auto w-full space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between w-3/4 p-4 border-b">
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-32 h-32 object-cover mr-4"
                />
                <div className="flex flex-col flex-grow">
                  <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                  <h2 className="text-lg text-gray-700 mb-2">{`$${Number.parseFloat(item.price).toFixed(2)}`}</h2>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleDecreaseItemCount(item)} 
                      className="bg-gray-300 p-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleIncreaseItemCount(item)} 
                      className="bg-gray-300 p-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="mt-6 w-3/4 p-4 border-t">
            <h2 className="text-lg font-semibold">Order Summary | {`${totalItemCount} ITEM(S)`}</h2>
            <h3 className="text-xl font-semibold">Total Amount: ${Number.parseFloat(totalPrice).toFixed(2)}</h3>
            <button className="bg-blue-500 text-white p-2 rounded mt-4">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


