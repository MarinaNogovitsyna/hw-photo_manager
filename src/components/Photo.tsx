import React, { FC } from 'react'

type Photo = string | ArrayBuffer | null

interface PhotoProps {
    src: Photo,
    deletePhoto: (photo: Photo) => void
}

export const Photo: FC<PhotoProps> = ({src, deletePhoto}) => {
  return (
    <div className='photo'>
        <div className='photo__delete' onClick={() => deletePhoto(src)}>X</div>
        {typeof src === 'string' 
            ? <img src={src} alt="photo" className='photo__img' />
        : null}
    </div>
  )
}
