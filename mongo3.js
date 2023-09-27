const { MongoClient } = require('mongodb');

const uri ="mongodb+srv://admin:admin@cluster0.xbxgf4r.mongodb.net/?retryWrites=true&w=majority";
const Client = new MongoClient(uri);
async function run(){
    try{
        await Client.connect();
        const db = Client.db('emoloyee');
        const collection = db.collection('mycollection');

        var myobj = [
            {name:"Raja"},
            {name:"Amit"},
            {name:"Raja"}
        ];

        const first = await collection.insertMany(myobj);
        console.log(first);
    }finally{
        await Client.close();
    }
}
run().catch(console.error);