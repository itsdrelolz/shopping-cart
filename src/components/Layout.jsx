import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {
  const [cartItems, setCartItems] = useState(null);
  const [cartSum, setCartSum] = useState(0);
  const [loading, setLoading] = useState(true);

  

    const getItems = async () => {
        try {
          const promises = [];
          for (let id = 1; id <= 10; id++) {
            promises.push(fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()));
          }
          const results = await Promise.all(promises);
          const {title, price, image} = results;
          console.log(`Title: ${title}, Price: ${price}, Image: ${image}`)
          return title, price, image;
        } catch (error) {
          console.error("Error fetching item data data:", error);
        } finally {
          setLoading(false);
        }
    }

    const formattedPokemon = async () => { 
        const formatted = await getItems();
        const formattedResults = formatted.map(pokemon => ({
          pokeImage: pokemon.sprites.front_default,
          pokeName: pokemon.name
        }))
        setItems(formattedResults);
        return formattedResults
      }
    
      useEffect(() => {
        formattedPokemon();
      
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

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
