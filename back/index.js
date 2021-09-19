
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const nodemailer = require('nodemailer')

const app = express();
app.use(cors());
 
app.use(express.json())


var db = mysql.createConnection({
  host: "smartmerchant.c2thktlxqssi.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "teamsmartmerchant",
  database: "smart_merchant",
  });
 

  db.connect(function(err) {
    if (err) console.log(err);
    else
    console.log("database connected!");
  });

// if(db.state === 'disconnected'){
//   console.log("db connection failed");
//   }
//   else{
//     console.log("db connection successfull");
//   }

app.post('/selectUser', (req,res) => {

    const name = req.body.username
    const password = req.body.userpassword
    console.log(name)
    console.log(password)

    db.query(
        "SELECT * FROM `users` WHERE `email`= ? AND `password`= ?",
         [name,password],
         (err,result) => {
             if(err){
                 console.log("error found")
             }
             if(result.length > 0){
                console.log("result found")
                
                res.send(result[0]);

              // console.log(result[0].userrole)
               
             }
             else{
                 console.log("result not found")
                 res.send(result[0])
                
             }
         }
    )

    
})

app.post('/getbuyers', (req,res) => {

    db.query(
        "SELECT * FROM `users` LEFT JOIN `buyers` ON users.userID=buyers.userID WHERE users.userType='buyer'",
         (err,result) => {
             if(err){
                 console.log("error found")
             }
             else{
             res.send(result)
             // console.log(result)
                
             }
         }
    )

    
})

app.post('/getsellers', (req,res) => {

    db.query(
        "SELECT * FROM `users` LEFT JOIN `sellers` ON users.userID=sellers.userID WHERE users.userType='seller'",
         (err,result) => {
             if(err){
                 console.log("error found")
             }
             else{
             res.send(result)
             // console.log(result)
                
             }
         }
    )

    
})

app.post('/paymentsDetails', (req,res) => {

    db.query(
        "SELECT * FROM `payments`",
         (err,result) => {
             if(err){
                 console.log("error found")
             }
             else{
             res.send(result)
             //console.log(result)
                
             }
         }
    )

    
})

app.put('/approveseller', (req,res) => {

    const status = "active"
    const email = req.body.email
    const name = req.body.name
    console.log(name)

    db.query(
        "UPDATE `users` set status=? WHERE email=?",[status,email],
         (err,result) => {
            if(err){
                console.log("query failed")
            }
            else if(result.affectedRows > 0){
                res.send({statusVal: "200"})
                const transporter = nodemailer.createTransport({
                    service: "hotmail",
                    auth: {
                        user:"smartwelenda@outlook.com",
                        pass: "smartmerchant123"
                    }
                })
                
                const options = {
                    from: "smartwelenda@outlook.com",
                    to: email,
                    subject : "Welcome to smart welenda",
                    text: `Hi ${name}. Your verification process successfully completed. Now you can login to the system using your email and password. Thank you!`
                    
                }
                
                transporter.sendMail(options, function(err,info) {
                    if(err){
                        console.log(err)
                    }
                    else{
                      //console.log(info.response)
                       res.send({statusVal: "200"})
                       
                    }
                })
            }
            else{
                //console.log(result)
            }
         }
    )

    
})

app.put('/removeseller', (req,res) => {

    const status = "deactive"
    const email = req.body.email

    db.query(
        "UPDATE `users` set status=? WHERE email=?",[status,email],
         (err,result) => {
            if(err){
                console.log("query failed")
            }
            else if(result.affectedRows > 0){
                res.send({statusVal: "200"})
            }
            else{
                //console.log(result)
            }
         }
    )

    
})

app.put('/removebuyer', (req,res) => {

    const status = "deactive"
    const email = req.body.email

    db.query(
        "UPDATE `users` set status=? WHERE email=?",[status,email],
         (err,result) => {
            if(err){
                console.log("query failed")
            }
            else if(result.affectedRows > 0){
                // console.log(result)
                res.send({statusVal: "200"})
            }
            else{
                //console.log(result)
            }
         }
    )

    
})

app.post('/setseller', (req,res) => {

 
    const email = req.body.email
    //console.log(email)

    db.query(
        "SELECT * FROM `users` LEFT JOIN `sellers` ON users.userID=sellers.userID WHERE users.userType = 'seller' AND users.email= '" + email + "' ",
         (err,result) => {
             if(err){
                 console.log("error found")
             }
             else{
             res.send(result)
          //  console.log(result)
                
             }
         }
    )

    
})


app.post('/complaints', (req,res) => {


    db.query(
        "SELECT * FROM `complaints`",
         (err,result) => {
             if(err){
                 console.log("error found")
             }
             else{
                 res.send(result)
              // console.log(result)
                
             }
         }
    )

    
})
app.put('/sendReply', (req,res) => {

    const message = req.body.message
    const email = req.body.email
    const complainID = req.body.complainID
    const status = "solved"
   // console.log(email)

   db.query(
    "UPDATE `complaints` set status=? WHERE complainID=?",[status,complainID],
     (err,result) => {
        if(err){
            console.log("query failed")
        }
        else if(result.affectedRows > 0){
            // console.log(result)
            res.send({statusVal: "200"})
            const transporter = nodemailer.createTransport({
                service: "hotmail",
                auth: {
                    user:"smartwelenda@outlook.com",
                    pass: "smartmerchant123"
                }
            })
            
            const options = {
                from: "smartwelenda@outlook.com",
                to: email,
                subject : "Welcome to smart welenda",
                text: message
                
            }
            
            transporter.sendMail(options, function(err,info) {
                if(err){
                    console.log(err)
                }
                else{
                    //console.log(info.response)
                   res.send({statusVal: "200"})
                   
                }
            })
        }
        else{
            //console.log(result)
        }
     }
)

     //send email to the customer
   
    
})



app.listen(8000, () =>{
    console.log("listning on port 9000");
})
