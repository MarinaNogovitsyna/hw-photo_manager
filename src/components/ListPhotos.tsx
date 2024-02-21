import React, { FC } from 'react'
import { Photo } from './Photo'

type Photo = string | ArrayBuffer | null

interface ListPhotosProps {
    photos: Photo[],
    deletePhoto: (photo: Photo) => void
}

export const ListPhotos: FC<ListPhotosProps> = ({photos, deletePhoto}) => {
  return (
    <div className='list'>
        {photos && photos.length 
        ? photos.map((el, index) => (
            <Photo src={el} key={Date.now() + index} deletePhoto={deletePhoto}/>
        ))
        : null}
    </div>
  )
}
