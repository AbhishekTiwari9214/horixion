const { indianTime } = require('./timezone')

const updatedata = async (container, message) => {
    console.log(message);
    let obj = {
        id: '1',
        time: `this is the time`,
        userName: message.user,
        text: message.text,
        replies: []
    }
    return new Promise(async (resolve, reject) => {
        let string = message.parentId
        console.log(string);
        let initialarr = string.split('_')
        let method = initialarr.reduce((acc, curr, i) => {
            if (i == 0) {
                if (curr == '0') {
                    acc += `room_chat`
                } else {
                    acc += `room_chat[${curr - 1}]`
                }
            } else if (i == initialarr.length - 1) {
                acc += `.replies`
            } else {
                acc += `.replies[${curr - 1}]`
            }
            return acc
        }, '')
        try {
            const querySpec = {
                query: `SELECT c.id,c.room_name,c.room_chat FROM c where c.id='${message.roomID}' `,
            }
            let { resources: existingDocument } = await container.items.query(querySpec).fetchAll();
            console.log(existingDocument);
            existingDocument = existingDocument[0]
            if (message.parentId != '0') {
                if (initialarr.length > 1) {
                    
                    const arrlen = eval(`existingDocument.${method}[${parseInt(initialarr[initialarr.length - 1]) - 1}].replies.length`);
                    const index = parseInt(initialarr[initialarr.length - 1]) - 1
                    const targetProperty = eval(`existingDocument.${method}[${index}]`);
                    obj.id = `${targetProperty.id}_${arrlen + 1}`
                    eval(`existingDocument.${method}[${parseInt([initialarr[initialarr.length - 1]]) - 1}].replies.push(obj)`)
                } else {
                    let arrlen = eval(`existingDocument.${method}.replies.length`)
                    const index = parseInt(initialarr[initialarr.length - 1]) - 1
                    const targetProperty = eval(`existingDocument.${method}`);
                    let newid = `${targetProperty.id}_${arrlen + 1}`
                    obj.id = newid
                    eval(`existingDocument.${method}.replies.push(obj)`)
                }
            } else {
                obj.id = existingDocument.room_chat.length + 1
                existingDocument.room_chat.push(obj)
            }
            
            await container.items.upsert(existingDocument);
            resolve(obj)
            return;
        } catch (error) {
            console.error("Error appending chat to document:", error);
        }
    })
}

const fetchChats = async (container, roomId) => {

    return new Promise(async (resolve, reject) => {
        try {

            const querySpec = {
                query: `SELECT c.id,c.room_name,c.room_chat FROM c where c.id='${roomId}'`,
            };


            const { resources: items } = await container.items.query(querySpec).fetchAll();


            if (items.length) {

                resolve(items[0])
            } else {
                resolve({ message: 'you can start your chat from here' })
            }


        } catch (error) {
            reject(error)
        }
    })
}


module.exports = { updatedata, fetchChats }



