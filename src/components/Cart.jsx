import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice, totalItemCount } = useOutletContext();

  return (
    <div className="flex flex-col items-center">
      {cartItems.length === 0 ? (
        <div className="px-4 py-2 m-4">
          <h1 className="">Your cart is empty! Click below to start shopping!</h1>
          <Link to="/shopping" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Shop Now
          </Link>
        </div>
      ) : (
        
        
        <div className="flex flex-col items-center w-full" >
          <div className="flex flex-col items-center h-80 overflow-y-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-row">
            <img
              src={item.image}
              alt={item.description}
              className=" w-full h-96 object-cover"
            />
            <h1 className="text-xl text-center font-semibold mb-2">{item.title}</h1>
            <h2 className="text-lg text-center text-gray-700 mb-4">{`$${Number.parseFloat(item.price).toFixed(2)}`}</h2>
            <h1>{`- ${item.quantity} +`}</h1>
            </div>
          ))}
            
          
            </div>
          <div className="">
          <h2>Order Summary | {`${totalItemCount} ITEM(S)`}</h2>
          <h3>Total Amount: {totalPrice}</h3>
          <button className="bg-blue-500 text-white p-2 rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



{/* <>
{cartItems.map(({title, price, image, description} , index) => (
  <div
    className="flex flex-col bg-white shadow-md"
    key={index}
  >
    <div className="">
      <img
        src={image}
        alt={description}
        className=" w-full h-96 object-cover"
      />
    </div>
    <div className="flex flex-col p-4 flex-grow">
      <h1 className="text-xl text-center font-semibold mb-2">{title}</h1>
      <h2 className="text-lg text-center text-gray-700 mb-4">{`$${Number.parseFloat(price).toFixed(2)}`}</h2>
    </div>
   
  </div>
))}
</> */}
