import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRquest(req, res);
      break;
    case "POST":
      await handlePostRquest(req, res);
      break;
    case "DELETE":
      await handleDeleteRquest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRquest(req, res) {
  const { _id } = req.query;
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
}

async function handlePostRquest(req, res) {
  const { name, price, description, mediaUrl } = req.body;

  try {
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).send("Missing one more fields from request body");
    }

    if (name == "" || price == "" || description == "" || mediaUrl == "") {
      return res.status(422).send("Missing one more fields from request body");
    }

    const product = await new Product({
      name,
      price,
      description,
      mediaUrl,
    }).save();
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server reported an error for the operation");
  }

  res.status(201).json(product);
}

async function handleDeleteRquest(req, res) {
  const { _id } = req.query;
  await Product.findOneAndDelete({ _id });
  res.status(204).json({});
}

/*

export default async (req, res) => {
  const { _id } = req.query;
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
};

*/
