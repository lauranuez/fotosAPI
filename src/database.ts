import mongoose from "mongoose";


const CONNECTION_URL = 'mongodb+srv://lauranuez:1234@cluster0.cg7jd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
export async function startConnection() {
    await mongoose.connect(CONNECTION_URL)
    .then(() => {
        console.log("Conexión establecida ^^ !"); 
    })
    .catch((error) => {
        console.log("Error de conexión con la base de datos :( "); 
    })
}
 
