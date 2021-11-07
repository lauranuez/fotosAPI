import { Request,Response } from 'express'
import Photo from '../models/Photo'
import path from 'path' //para buscar la path de la foto
//import fs from 'fs' //No puede utilizar async y await pq no soporta promesas -> instaar otro modulo -> fs-extra
import fs from 'fs-extra' //para eliminar el archivo

export async function getPhotos(req: Request, res:Response): Promise<Response> { 
    const photos = await Photo.find();
    return res.json(photos);
}

export async function getPhoto(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    const photo = await Photo.findById(id);
    return res.json(photo);
}

export async function createPhoto(req: Request, res:Response): Promise<Response> { 
    const {title, description} = req.body;

    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file?.path //req.file nos da la info de la imagen que se esta subiendo
    };

    const photo = new Photo(newPhoto);
    await photo.save();
    
    return res.json({
        message: 'Photo successfully saved',
        photo
    })
};

export async function deletePhoto(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    const photo = await Photo.findByIdAndRemove(id);
    if (photo){
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Photo Deleted',
        photo
    });
}

export async function updatePhoto(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    const {title, description} = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id,{
        title,
        description
    }, {new:true});
    return res.json({
        message: 'Photo successfully updated',
        updatedPhoto
    });
}