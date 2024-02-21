import React, { useState } from 'react'
import { InputFile } from './InputFile'
import { ListPhotos } from './ListPhotos';

type Photo = string | ArrayBuffer | null

export const Wrapper = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    function addPhoto (photos: Photo[]) {
        setPhotos(photos)
    }

    function deletePhoto (photo: Photo) {
        const updatedPhotos = photos.filter((item) => item !== photo);
        setPhotos(updatedPhotos);
    }
    
  return (
    <div className='wrapper'>
        <InputFile addPhoto={addPhoto}/>
        <ListPhotos photos={photos} deletePhoto={deletePhoto}/>
    </div>
  )
}
