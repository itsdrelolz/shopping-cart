import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import getItems from "../itemsApi";
import { useOutletContext } from "react-router-dom";

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
        }
        catch(err) { 
          console.error(err);
        }
        finally { 
          setLoading(false);
        }
      }
      getData();

    }, []);

    console.log(getItems())


    const handleAddToCart = (item) => { 
      setCartItems(prevItem => {
        const updatedCart = [...prevItem, item];

        const cartTotal = updatedCart.reduce((acc, curr) => 
          acc + Number.parseFloat(curr.price), 0
        ).toFixed(2);
    
      setCartSum(cartTotal);
      return updatedCart;
    })
  };
  




    console.log(cartItems)

    console.log(cartSum)

    


  


    

    


  if (loading) return <div className="flex flex-auto justify-center font-sans text-black text-2xl w-full items-center ">Loading...</div>;
  


  return (
    <>
      <Navbar />

      <Outlet context={{ items, handleAddToCart, cartItems, cartSum }}/>

      <Footer />
    </>
  );
};




export default Layout;


