import { useOutletContext } from "react-router-dom";

const Card = () => {
  const { items } = useOutletContext();
  const { handleAddToCart } = useOutletContext();
  return (
    <>
      {items.map((product , index) => (
        <div
          className="flex flex-col bg-white shadow-md"
          key={index}
        >
          <div className="">
            <img
              src={product.image}
              alt={product.description}
              className=" w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col p-4 flex-grow">
            <h1 className="text-xl text-center font-semibold mb-2">{product.title}</h1>
            <h2 className="text-lg text-center text-gray-700 mb-4">{`$${Number.parseFloat(product.price).toFixed(2)}`}</h2>
          </div>
          <button onClick={(() => handleAddToCart(product))} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
