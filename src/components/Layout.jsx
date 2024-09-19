import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import getItems from "../itemsApi";

const Layout = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetching data
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getItems();
        setItems(data);
        return data;
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // Updating total item count and price whenever cartItems change
  useEffect(() => {
    const newTotalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const newTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    setTotalItemCount(newTotalItemCount);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  // Add item to cart
  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.title === newItem.title);
      if (existingItem) {
        return prevItems.map(item => 
          item.title === newItem.title 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  // Increase item count
  const handleIncreaseItemCount = (newItem) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.title === newItem.title 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease item count or remove item
  const handleDecreaseItemCount = (newItem) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.title === newItem.title && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  if (loading)
    return (
      <div className="flex flex-auto justify-center font-sans text-black text-2xl w-full items-center">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet
          context={{
            items,
            handleAddToCart,
            cartItems,
            totalPrice,
            totalItemCount,
            handleIncreaseItemCount,
            handleDecreaseItemCount,
          }}
        />
      </div>
    </div>
  );
};

export default Layout;
