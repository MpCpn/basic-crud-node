const router = require('express').Router();
const Product = require('../models/Product')


router.get('/', async (req, res) => {

    let product;
    try {
        product = await Product.find();
    } catch (err) {
        console.log(err);
    }

    res.status(200).json(product)
});

router.get('/:id', async (req, res) => {

    const id = req.params.id;
    let product;
    try {
        product = await Product.findById(id);
    } catch (err) {
        console.log(err);
    }
    res.status(200).json(product)
});

router.post('/', async (req, res) => {

    const { name, category, desc, price } = req.body
    let product;

    try {
        product = new Product({
            name,
            category,
            desc,
            price
        })
        await product.save();
    } catch (err) {
        console.log(err);
    }

    res.status(201).json(product)
});

router.put('/:id', async (req, res) => {
    const { name, category, desc, price } = req.body
    const id = req.params.id ;
    let product;
    try {
        product = await Product.findByIdAndUpdate(id,{
            name,
            category,
            desc,
            price
        });
        product = await product.save();
    } catch (err) {
        console.log(err);
    }

    res.status(200).json({message: `Updeated ProductId ${id}`})
})

router.delete('/:id', async (req,res)=>{
    const id = req.params.id;
    let product ;

    try {
        product = await Product.findOneAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    res.status(200).json({message: `Deleted ProductId ${id}`})

})

module.exports = router 