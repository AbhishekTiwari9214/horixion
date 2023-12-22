let postmanToOpenApi = require('postman-to-openapi')

// Postman Collection Path
let postmanCollection = './postmancollection.json'
// Output OpenAPI Path
const outputFile = '../helpers/swagger.yml'

// Async/await
postmanToOpenApi1=async(postmanCollection, outputFile)=>{


try {
    const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    // Without save the result in a file
    const result2 = await postmanToOpenApi(postmanCollection, null, { defaultTag: 'General' })
    console.log(`OpenAPI specs: ${result}`)
} catch (err) {
    console.log(err)
}
}

// Promise callback style
postmanToOpenApi1(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })

