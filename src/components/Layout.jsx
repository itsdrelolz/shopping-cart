import Navbar from "./NavBar";

import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import getItems from "../itemsApi";

const Layout = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [loading, setLoading] = useState(true);

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

  // const handleAddToCart = (item) => {
  //   setCartItems((prevItem) => {
  //     const updatedCart = [...prevItem, item];
  //     const cartTotal = updatedCart
  //       .reduce((acc, curr) => acc + Number.parseFloat(curr.price), 0)
  //       .toFixed(2);
  //     setCartSum(cartTotal);
  //     return updatedCart;
  //   });
  // };

  const handleAddToCart = (newItem) => { 
    setCartItems((prevItems) => { 
      const itemIndex = prevItems.findIndex(item => item.title = newItem.title); 
      if (itemIndex > -1) { 
        const updatedItems = [...prevItems]; 
        updatedItems[itemIndex].quantity += 1;
        console.log(updatedItems)
        return updatedItems;
      } else {
        return [...prevItems,{ ...newItem, quantity: 1 }]
      }
    });
  };


  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => { 
    return total + (item.price * item.quantity);
  }, 0);
  
      

        
    
  
    

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
        <Outlet context={{ items, handleAddToCart, cartItems, totalPrice, totalItemCount }} />
      </div>
    </div>
  );
};

export default Layout;
