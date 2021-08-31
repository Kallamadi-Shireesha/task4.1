



/*express js*/
const express=require('express')
const bodyparser=require('body-parser')
/*sending email*/
const nodemailer=require('nodemailer');
var events = require('events');
var events = new events.EventEmitter();


const app=express()
const port=1057

/*email*/
/*
var transporter = nodemailer.createTransport({
    service:'gmail',
     auth: {
        user:"kallamadi555@gmail.com",
        pass:"k@ll@m@di491"
    }

});

var options = {
    from:"kallamadi555@gmail.com",
    to: "shireesha967@gmail.com",
    subject: "voting system",
    
  text: `Check out this attached pdf file`,
  
  //attachments: [{
    
    
    
    //filename: 'hackCovest PPT.pptx',
    //path: 'C:\Users\navin\OneDrive\Desktop\internshiptask_3\hackCovest PPT.pptx',
    //contentType: 'hackCovest PPT\pptx'
   
  //}]
}
transporter.sendMail(options,function(err, info) {
    if (err) {
      console.error(err);
      
    } else {
      console.log("sent:"+info.response);
    }
  })

*/



const { Client}=require('pg')
const client=new Client ( {
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"$Hiree$ha491",
    database:"project2"
})
client.connect()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
//app.use(bodyparser.urlencoded({extended: false}));
app.set('view engine','pug')

app.get('/',function(req,res) {
    res.sendFile('index.html',{root:__dirname})
});
client.query('select * from excel2',(err,result)=> {
    if(!err) { console.log(result.rows);}
    //client.end();

})




app.post('/name',function(req,res) {  

    console.log("INSERT INTO users(namee, count,upvote,downvote,description,ppt) values('"+req.body.namee+"',"+req.body.count+","+req.body.upcount+","+req.body.downvote+",'"+req.body.des+"','"+req.body.ppt+"')");
    var postgres = "INSERT INTO users(namee, count,upvote,downvote,description,ppt) values('"+req.body.namee+"',"+req.body.count+","+req.body.upcount+","+req.body.downvote+",'"+req.body.des+"','"+req.body.ppt+"')";
    //'INSERT INTO test SET ?', {name:req.body.name, age:req.body.mage},
    var maxi="select * from users where count=7";
    client.query(maxi,function(err) {
        if(!err) {
            var transporter = nodemailer.createTransport({
                service:'gmail',
                 auth: {
                    user:"kallamadi555@gmail.com",
                    pass:"*****"
                }
            
            });
            
            var options = {
                from:"kallamadi555@gmail.com",
                to: "cvt@corevaluetech.com",
                subject: "voting system",
                
                
              File: `${req.body.ppt}`,
              
            }
            transporter.sendMail(options,function(err, info) {
                if (err) {
                  console.error(err);
                  
                } else {
                  console.log("sent:"+info.response);
                }
              })
            
             
        }
         client.end()

    })
    
    res.render('index',{title:'datasaved', message:"data saaved"});
    
})

 


























/*
app.get('/',function(req,res) {
    res.render('index',{title:'hey express message is chaged',message:'message changed',expressjs:'expressjs messagenpm'})
})*/

//app.get('/',(req,res) => res.send('hello world'))
//app.listen(port,() => console.log("example"))


/*
//get data from table
client.query('select * from users',(err,result)=> {
    if(!err) { console.log(result.rows);}
    client.end();

})*/

app.listen(port,()=> console.log("listening"))