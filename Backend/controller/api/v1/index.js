const axios = require('axios');
let database = [];
module.exports.products_trancations = async (req,res) => {
    const urlToFetch = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';
   
    axios.get(urlToFetch)
      .then(response => {
       database.push(response.data);
       console.log(database)
        // Process the response data here
      })
      .catch(error => {
        console.error('Error fetching URL:', error.message);
        // Handle errors here
      });
}