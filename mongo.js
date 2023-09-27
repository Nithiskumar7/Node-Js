const { MongoClient } = require('mongodb');

const url = "mongodb+srv://admin:admin@cluster0.xbxgf4r.mongodb.net/?retryWrites=true&w=majority";
const Client = new MongoClient(url);

async function run(){
    try{
        await Client.connect();
        const db = Client.db('emoloyee');
        const collection = db.collection('mycollection');

        //Find the first document in the collection
        const first = await collection.findOne()
        console.log(first);
    } finally{
        //Close the database connection when finished or an error occurs
        await Client.close();
    }
}
run().catch(console.error);