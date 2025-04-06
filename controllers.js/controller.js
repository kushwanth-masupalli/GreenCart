const Product = require('../database/db_schema');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("❌ Error fetching all products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Insert a new product
const insertProduct = async (req, res) => {
  const { pid, name, quantity, category } = req.body;
  if (!pid || !name || !quantity || !category) {
    return res.status(400).json({ error: "All fields are mandatory" });
  }

  try {
    const cont = await Product.create({ pid, name, quantity, category });
    res.status(201).json(cont);
  } catch (err) {
    console.error("❌ Error inserting product:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get product by pid
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ pid: id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("❌ Error fetching product by pid:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get products by name (partial match)
const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    const products = await Product.find({
      name: { $regex: name, $options: 'i' },
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found with given name" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("❌ Error searching by name:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get products by category (partial match)
const getByCat = async (req, res) => {
  try {
    const { cat } = req.params;
    const products = await Product.find({
      category: { $regex: cat, $options: 'i' },
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("❌ Error searching by category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  insertProduct,
  getById,
  getByName,
  getByCat,
};
