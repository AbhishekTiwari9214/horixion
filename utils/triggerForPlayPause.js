const schedule = require('node-schedule');


const Excel = require('exceljs');
const dbQuery = require("../helpers/dbQuery.json");
const dbrequest = require("./dbrequest");
const format = require('./queryFormat');

const job = schedule.scheduleJob('1 0 * * *', async function(){
    const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-GB');
    let formattedquery = await format(dbQuery.playPauselp.UpdateAllLpStart,formattedDate);
    dbrequest(formattedquery).then(status=>{
        console.log(status);
    }).catch(err => reject(err));
    formattedquery = await format(dbQuery.playPauselp.UpdateAllLpStop,formattedDate);
    dbrequest(formattedquery).then(status=>{
        console.log(status);
    }).catch(err => reject(err));
});