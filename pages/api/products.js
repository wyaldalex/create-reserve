//import products from "../../static/products.json";
import Product from "../../models/Product";
import connectDb from "../../utils/connectDb.js";

connectDb();

export default async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);

  //console.log(req.method);
  //res.status(200).json(products);
};
