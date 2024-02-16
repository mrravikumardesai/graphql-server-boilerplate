import mongoose from "mongoose";


const connectDb = async() =>{

        try {
          await mongoose.connect('mongodb://127.0.0.1:27017/threads');
        //   mongoose.connection(console.log("connected"));
          console.log('Connected to MongoDB');
        } catch (error) {
          console.error('Error connecting to MongoDB', error);
        }

}

export default connectDb