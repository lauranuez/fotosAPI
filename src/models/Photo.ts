import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    title:String,
    description:String,
    imagePath: String
});

//Interfaz --> descripcion de un objeto
interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);