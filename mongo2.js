const { MongoClient } = require('mongodb');
const mon = "mongodb+srv://admin:admin@cluster0.xbxgf4r.mongodb.net/?retryWrites=true&w=majority";
const Client = new MongoClient(mon);

async function run(){
    try{
        await Client.connect() 
        const db = Client.db('emoloyee');
        const collection = db.collection('mycollection');
        var myob = {name:"Nithis2"};

        const first = await collection.insertOne(myob);
        console.log(first);
    }finally{
        await Client.close();
    }
    
}
run().catch(console.error)