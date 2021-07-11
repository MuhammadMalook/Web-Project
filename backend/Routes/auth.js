const express = require('express');
const router = express.Router(); // here we will use all routes like get and post routes
const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');
const Accord = mongoose.model('Accord')
const Civic = mongoose.model('Civic')
const Brv = mongoose.model('Brv')
const Spare = mongoose.model('Spare')
const UserSpare = mongoose.model('UserSpare')
const UserCar = mongoose.model('UserCar')
const bcrypt = require('bcryptjs');
const jt = require('jsonwebtoken');
const { JT_SECRET } = require('../keys');
const login = require('../middleware/login')

router.get('/hello', (req, res) => {

    res.send("hello this is main directory");
})

// route for signup
router.post('/signup', (req, res) => {
    

    const { name, email, password,  } = req.body;
    console.log("Name",name)
    if (!email || !password || !name) {
        return res.status(422).json({ "error": "Please add all the fields" })
    }
    res.json({ "message": "successfully posted the data" })
    Admin.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ "error": "Admin already exist with that email" })
        }
        bcrypt.hash(password, 11)
            .then(hashedpassword => {

                const admin = new Admin({
                    email,
                    password: hashedpassword,
                    name,
                    
                })

                admin.save().then((admin) => {
                    res.json({ message: "saved successfully" })
                }).catch(err => { console.log(err) })
            })


    }).catch(err => { console.log(err) })
})


router.get('/privateData',login, (req,res)=>{

    res.send("hello user this is private data")
})


//route for signin
router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).json({ "error": "password or email is missing" });
    }
    Admin.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
            res.status(422).json({ "error": "Invalid password or Eamil" });
        }
        bcrypt.compare(password, savedUser.password).then(matched => {
            if (matched) {
                //res.json({ "message": "successfully signed in" })
                const token = jt.sign({_id:savedUser._id},JT_SECRET);
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else {
                 res.status(422).json({"error":"Invalid password or Eamil"});
                

            }
        }).catch(err => { console.log(err) })
    })


})

router.get('/accord',(req,res)=>{
    Accord.find().then(result=>res.json({result}))
})
router.get('/civic',(req,res)=>{
    Civic.find().then(result=>res.json({result}))
})
router.get('/brv',(req,res)=>{
    Brv.find().then(result=>res.json({result}))
})
router.get('/spare',(req,res)=>{
    Spare.find().then(result=>res.json({result}))
})

router.get('/userCar',(req,res)=>{
    UserCar.find().then(result=>res.json({result}))
})
router.get('/userSpare',(req,res)=>{
    UserSpare.find().then(result=>res.json({result}))
})


router.post('/addcar',(req,res)=>{
    const { name, model, price, photo  } = req.body;
    if (!name || !model || !price || !photo) {
        
        return res.status(422).json({ "error": "Please add all the fields" })
    }
   
   if(name==='Accord')
   {
    const accord = new Accord({
        name,
        model,
        photo,
        price     
    })
    accord.save().then((accord) => {
        res.json({ message: "saved successfully" })
    }).catch(err => { console.log(err) })
    
}
else if(name==='Brv')
{
    const brv = new Brv({
        name,
        model,
        photo,
        price     
    })
    brv.save().then((brv) => {
        res.json({ message: "saved successfully" })
    }).catch(err => { console.log(err) })
}
else 
{
    const civic = new Civic({
        name,
        model,
        photo,
        price     
    })
    civic.save().then((civic) => {
        res.json({ message: "saved successfully" })
    }).catch(err => { console.log(err) })
}
})

router.post('/addspare',(req,res)=>{
    const { name, carName, price, photo  } = req.body;
    if (!name || !carName || !price || !photo) {
        
        return res.status(422).json({ "error": "Please add all the fields" })
    }
    const spare = new Spare({
        name,
        carName,
        photo,
        price     
    })
    spare.save().then((spare) => {
        res.json({ message: "saved successfully" })
    }).catch(err => { console.log(err) })  
})

router.post('/add-user-spare',(req,res)=>{
    const { name, nic,phone,email, spareName,carName} = req.body;
    if (!name || !spareName || !nic || !phone || !email || !carName ) {
        
        return res.status(422).json({ "error": "Please add all the fields" })
    }
    const userspare = new UserSpare({
        name,
        nic,
        phone,
        email,
        carName,
        spareName     
    })
    userspare.save().then((userspare) => {
        res.json({ message: "saved successfully" })
    }).catch(err => { console.log(err) })  
})

router.post('/add-user-car',(req,res)=>{
    const { name, nic,phone,email, model,carName} = req.body;
    if (!name || !model || !nic || !phone || !email || !carName ) {
        
        return res.status(422).json({ "error": "Please add all the fields" })
    }
    const usercar = new UserCar({
        name,
        nic,
        phone,
        email,
        carName,
        model     
    })
    usercar.save().then((usercar) => {
        res.json({ message: "saved successfully" })
    }).catch(err => { console.log(err) })  
})


router.delete('/delbrv/:id',(req,res)=>{
    Brv.findOne({_id:req.params.id})
    .exec((err,car)=>{
        if(err || !car){
            return res.status(422).json({error:err})
        }
        if(true)
        {
            console.log(car)
            car.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>console.log(err))
        }
    })
})

router.delete('/delcivic/:id',(req,res)=>{
    Civic.findOne({_id:req.params.id})
    .exec((err,car)=>{
        if(err || !car){
            return res.status(422).json({error:err})
        }
        if(true)
        {
            console.log(car)
            car.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>console.log(err))
        }
    })
})

router.delete('/delaccord/:id',(req,res)=>{
    Accord.findOne({_id:req.params.id})
    .exec((err,car)=>{
        if(err || !car){
            return res.status(422).json({error:err})
        }
        if(true)
        {
            console.log(car)
            car.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>console.log(err))
        }
    })
})

router.delete('/delspare/:id',(req,res)=>{
    Spare.findOne({_id:req.params.id})
    .exec((err,car)=>{
        if(err || !car){
            return res.status(422).json({error:err})
        }
        if(true)
        {
            console.log(car)
            car.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>console.log(err))
        }
    })
})

module.exports = router;