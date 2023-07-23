//This page contains the logic of the backend

const showStorePage = (req, res) => {
    res.render('index');
}

const showProductPage = (req, res) => {
    res.render('product')
}

const showCartPage = (req, res) => {
    res.render('cart')
}

module.exports = { showStorePage, showProductPage, showCartPage };