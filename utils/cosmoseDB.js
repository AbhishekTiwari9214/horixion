const { CosmosClient } = require("@azure/cosmos");


const cosmoseConnection=()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const endpoint = process.env.COSMOS_ENDPOINT
const key = process.env.COSMOS_KEY

const client = new CosmosClient({ endpoint, key });


// Create a reference to your database and container
const databaseId = process.env.DATABASE_I
const containerId = process.env.CONTAINER_ID 

const database = await client.database(databaseId);
const container =await database.container(containerId);

// const itemToInsert ={
//     id:'N_0001',
//     room_name:'REACT community',
//     room_chat:
//     [
//     ]
// }
  
// // //   // Insert the document
//   container.items.upsert(itemToInsert)
//     .then((createdItem) => {
//       console.log("Document created:", createdItem);
//     })
//     .catch((error) => {
//       console.error("Error creating document:", error);
//     });

resolve({'container':container,
message:'cosmose db connected successfully'
})

return container
            
        } catch (error) {
            reject('there is a error in the connection of cosmose : '+ error)
        }

    })
}



// async function queryDocuments() {
//     const querySpec = {
//         query: "SELECT * FROM c",
//     };
    
//     const { resources: items } = await container.items.query(querySpec).fetchAll();
  
//   items.forEach(item => {
//     console.log(item);
//   });
// }

// queryDocuments().catch((error) => {
//   console.error(error);
// });


module.exports= cosmoseConnection
  
  
  
  