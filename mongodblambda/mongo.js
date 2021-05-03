const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI =
    "mongodb+srv://edangol:mongodbpassword@evancluster.hvppq.mongodb.net/test?retryWrites=true&w=majority";

let cachedDb = null;
var client = null;
async function connectToDatabase() {


    return db
}
module.exports.find = async (event) => {
    try {
        if (cachedDb) {
            return cachedDb;
        }

        client = await MongoClient.connect(event.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = await client.db(event.db);
        cachedDb = db;
        const data = await db.collection(event.collection).find(event.data).limit(event.limit).toArray();
        // Insert the event object, which is the test data we pass in
        //const result = await db.collection("movies").insertOne(event);
        await client.close();

        return await data;
    }
    catch (err) {
        console.log("error is " + err)
    }
    finally {
        await client.close();
    }

};

module.exports.insertone = async (event) => {
    try {
        if (cachedDb) {
            return cachedDb;
        }

        client = await MongoClient.connect(event.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = await client.db(event.db);
        cachedDb = db;
        const data = await db.collection(event.collection).insertOne(event.data)

        await client.close();

        return await data;
    }
    catch (err) {
        console.log("error is " + err)
    }
    finally {
        await client.close();
    }

};

module.exports.findone = async (event) => {
    try {
        if (cachedDb) {
            return cachedDb;
        }

        client = await MongoClient.connect(event.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = await client.db(event.db);
        cachedDb = db;
        const data = await db.collection(event.collection).findOne(event.data)

        return await data;
    }
    catch (err) {
        console.log("error is " + err)
    }
    finally {
        await client.close();
    }



};

module.exports.listDatabases = async (event) => {
    if (cachedDb) {
        return cachedDb;
    }
    client = await MongoClient.connect(event.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    databasesList = await client.db().admin().listDatabases();

    console.log(databasesList);
    await client.close();
    return await databasesList;
};