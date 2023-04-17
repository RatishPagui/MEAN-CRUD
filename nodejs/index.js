//compass connect

const express = require ('express')
const app = express()


const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017"

const client = new MongoClient(url);


//corps code

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept");
    
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    next();
    
});

//

// main compass code

// async function getMongoData()
// {
//     let result = await client.connect();
//     let db = result.db('Students');
//     let collection = db.collection('personaldata');
//     let data = await collection.find({Name:"Ratish"}).toArray();
//     console.log(data)
// }
// getMongoData()

// main compass code end

async function getMongoData1()
{
    let result = await client.connect();
    let db = result.db('Students');
    let collection = db.collection('employeedata');
    let data1 = await collection.find().toArray();
    console.log(data1)
    
    app.get('/employeeinfo',
    (req,res)=>{res.json(data1)}
    )

   console.log(data1)
    
}
getMongoData1()

// async function deletedata1(){
//     let result = await client.connect();
//     let db = result.db('Students');
//     let collection = db.collection('employeedata');
//     let data1 = await collection.deleteOne(i).toArray();
//     console.log(data1)

    
//     app.delete('/employeeinfo1/:id',(req,res)=>{
//         data1.deleteOne({_id:req.params.id}).then(
//             (result)=>{res.json(result)} 
//         ).catch(
//             (err)=>{console.log(err)}
//         )
//     }
//     )
// }
// deletedata1()



app.listen(3000,
    ()=>{console.log("Server is ruuning on 3000")}
)
