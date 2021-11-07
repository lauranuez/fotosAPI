import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'; 

const storage = multer.diskStorage({
    destination:'uploads', //carpeta donde guardara las imagenes
    filename: (req, file, cb) => { //Renombrar los archivos que reciba
        cb(null,  uuidv4() + path.extname(file.originalname)); //Se renombrara con un string q es un id aleatorio que crea el uuid + la extension del archivo
    }
})


export default multer({storage});