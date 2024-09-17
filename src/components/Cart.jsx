
import { useOutletContext } from "react-router-dom";

  


const Cart = () => {
  const { cartItems } = useOutletContext();
  const { cartSum } = useOutletContext();
  return (
    <>

    <div className="">

    </div>

    <div className="">

    <h2>Order Summary | {`${cartItems.length} ITEM(S)`}</h2>
    <h3>Total Amount: {cartSum}</h3>
    </div>
    <button>
      Checkout
    </button>
    </>
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
