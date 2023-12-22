


const axios = require('axios');

const 
gTokenDecode = async (token) => {
   
    
    return new Promise(async (resolve, reject) => {
        try {
            if (!token) {
                reject({ message: 'Token is empty' });
            
            }
            const url = 'https://www.googleapis.com/oauth2/v2/userinfo';
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
            const response = await axios.get(url, config);
            // console.log(response);
            const userInfo = response.data;

            const data = {
                unique_name: userInfo.email,
                name: userInfo.name,
            };


            // console.log(data);
            resolve(data);
        } catch (error) {
           if (error.response.status) {
            reject({
                code: error.response.status,
                message: error.response.statusText
               })
           }else{
            reject({
                message:'error while decoding the token',
                code: false
            })
           }
        }
    });
};

module.exports = gTokenDecode;
