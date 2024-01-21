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
        const images = [];

        for (const file in files) images[files[file]] = path.resolve(imageDir, files[file]);

        return images;
    } catch (error) {
        console.log("Error getting product images");
        return [];
    }
};

module.exports = { getProducts };
