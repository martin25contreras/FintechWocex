const mongoose = require('mongoose');

const MongoClient =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
            useCreateIndex: true
        }, console.log('mongo database is connected!!!'))
        console.log('mongo database is connected!!!')
    }catch(error){
        console.error('Error: '+error);
    }

}
module.exports = MongoClient;