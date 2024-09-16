

const getItems = async () => {
    try {
      const promises = [];
      for (let id = 1; id <= 10; id++) {
        promises.push(fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()));
      }
      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      console.error("Error fetching item data data:", error);
    }
}

export default getItems; 
