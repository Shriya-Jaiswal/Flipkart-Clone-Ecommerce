import mongoose from "mongoose";

export const Connection = async (UserName,PassWord) =>{
    const URL = `mongodb://${UserName}:${PassWord}@flipkart-clone-shard-00-00.073vl.mongodb.net:27017,flipkart-clone-shard-00-01.073vl.mongodb.net:27017,flipkart-clone-shard-00-02.073vl.mongodb.net:27017/FLIPKART_CLONE?ssl=true&replicaSet=atlas-wulixd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology : true , useNewUrlParser : true});
       console.log('Database Connected Successfully');
    }
    catch(error){
        console.log("Error : " , error.message);
    }
}


export default Connection;