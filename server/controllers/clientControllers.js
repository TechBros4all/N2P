const fs = require("fs").promises;
const path = require("path");

const getProducts = async (req, res) => {
  const imageDir = path.resolve(
    __dirname,
    "..",
    "..",
    "client",
    "public",
    "images",
    "products"
  );

  try {
    const files = await fs.readdir(imageDir);
    const images = {};

    for (const file of files) {
      const imagePath = `/images/products/${encodeURIComponent(file)}`;
      images[file] = imagePath;
    }

    res.json(images);
  } catch (error) {
    console.log("Error getting product images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { getProducts };
