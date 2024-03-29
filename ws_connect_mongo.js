const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hugomayonobe:NS0Vs2b4NvKRsfe0@cluster0.s0q6mkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

// Test connection
run().catch(console.dir);