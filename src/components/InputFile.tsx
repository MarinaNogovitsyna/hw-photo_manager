import React, { FC } from 'react'

type FilePromise = Promise<string | ArrayBuffer | null>;
type Photo = string | ArrayBuffer | null

interface InputFileProps {
    addPhoto: (photos: Photo[]) => void
}

export const InputFile: FC<InputFileProps> = ({addPhoto}) => {
    const fileToDataUrl = (file: File): FilePromise => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', evt => {
                resolve(evt.target?.result as string | ArrayBuffer | null);
            });

            fileReader.addEventListener('error', evt => {
                reject(new Error((evt.target?.error as DOMException).message));
            });

            fileReader.readAsDataURL(file);
        });
    }

    const handleSelect = async (evt: React.ChangeEvent<HTMLInputElement>) => {
        const files = evt.target.files;
        if (files) {
            const fileList = Array.from(files);
            const urls = await Promise.all(fileList.map(file => fileToDataUrl(file)));
            addPhoto(urls)
        }
    }

    return (
        <div className="file-input-container">
            <div className="click-to-select">Click to select</div>
            <input type="file" className="file-input" onChange={handleSelect} multiple />
        </div>
    )
}
