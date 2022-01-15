const router = require("express").Router();
const Admin = require("../models/admin");
const Product = require("../models/Product");
const Pendorder = require("../models/Pendingorder");
const deliverorder = require("../models/deliveredorder");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  res.send('we are on register');
  console.log(req.body.username);
console.log(req.body.email);

  const newadmin = new Admin({
    username: req.body.username,
    email: req.body.email,
  
   password:req.body.password,
   phoneno:req.body.phoneno
  });

  try {
    const savedadmin = await newadmin.save();
  

    //res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
  res.send('we are on login');


    try{
        const admin = await Admin.findOne(
            {
                userName: req.body.username,
                password:req.body.password
            }
        );

        
     console.log("hello    world ");
       
        //!user && res.status(401).json("Wrong User Name");

        
        

        const originalPassword = admin.password;

        const inputPassword = req.body.password;
        /*
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");
            */

    if(inputPassword==originalPassword)
    {
        console.log('Password matched');
    }
    else{
        console.log('Password not matched');

    }
      
       
       
    }catch(err){
        res.status(500).json(err);
    }

}
);


//  add product item   on admin/addproduct

router.post("/addproduct", /*verifyTokenAndAdmin,*/ async (req, res) => {
    res.send("we are on products");
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});




////  view pending order by admin
router.get("/pendingorder", /*verifyTokenAndAdmin,*/ async (req, res) => {

try {
  let penorder = await Pendorder.find();
    
    res.status(200).json(penorder);

} catch (err) {
  res.status(500).json(err);
}
});
  

//// view delivered order by admin

router.get("/deliveredorder", /*verifyTokenAndAdmin,*/ async (req, res) => {

try {

  let deorder = await deliverorder.find();
    
    res.status(200).json(deorder);

} catch (err) {
  res.status(500).json(err);
}
});
  /////

  
//UPDATE product
router.put("updateproduct/:id", /*verifyTokenAndAdmin,*/ async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("deleteproduct/:id", /*verifyTokenAndAdmin,*/ async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});



  /////

module.exports = router;