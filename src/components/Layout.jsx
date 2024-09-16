import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import getItems from "../itemsApi";
import { useOutletContext } from "react-router-dom";

const Layout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [loading, setLoading] = useState(true);

  

    useEffect(() => { 
      const getData = async () => { 
        try {
        const data = await getItems();
        setCartItems(data);
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

   

    


  if (loading) return <div className="flex flex-auto justify-center font-sans text-black text-2xl w-full items-center ">Loading...</div>;
  

  // const handleCartSum = () => {
  //     const cartSum = cartItems.reduce((prev, curr) => prev + curr, 0)
  //     setCartSum(cartSum);
  //     console.log(handleCartSum())
  // }
  return (
    <>
      <Navbar />

      <Outlet context={{ cartItems }}/>

      <Footer />
    </>
  );
};




export default Layout;


