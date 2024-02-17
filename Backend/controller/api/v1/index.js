const axios = require('axios');
const Product = require('../../../model/Product'); 
let productDB = [];

module.exports.products_transactions = async (req, res) => {
    const urlToFetch = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

    try {
        const response = await axios.get(urlToFetch);
      productDB = response.data;

        for (let productData of productDB) {
       await   insertIntoDB(productData);
        }

       
    } catch (error) {
        console.error('Error fetching or saving products:', error.message);
       
    }
}


const insertIntoDB = async (productData) =>{
  await Product.create({
    title: productData.title,
    price: productData.price,
    description: productData.description,
    category: productData.category,
    image: productData.image,
    sold: productData.sold,
    dateOfSale: productData.dateOfSale
});
}


module.exports.products = async (req,res)=>{
  const page = parseInt(req.query.page) || 1;
  const perPage = 10;
try{
  const product = await Product.find()
  .skip((page-1)*perPage)
  .limit(perPage)

  return res.status(200).json({
    product:product,
    success:true
  })
}
catch(error){
  return res.status(500).json({
    message:'Interval server Error'
  })
}
}