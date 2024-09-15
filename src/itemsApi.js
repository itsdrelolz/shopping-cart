


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



export default getItems;
