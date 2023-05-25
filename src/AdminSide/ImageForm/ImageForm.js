import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDelete, usePost, usePut } from '../../_Utils/Hooks';

const ImageForm = ({ data, id }) => {
    const token = localStorage.getItem('access_token');
    const base64prefix = "data:image/jpeg;base64,"
    const [images, setImages] = useState([
        {
            image: '',
            name: '',
            idProject: id
        }
    ]);
    useEffect(() => {
        if (data) {
            const image = data.map(item => ({
                image: item.image,
                name: item.name,
                idProject: item.idProject
            }));
            setImages(image);

        }
    }, [data]);

    const [alertShow, setAlertShow] = useState(false); // Variabile di stato per gestire la visualizzazione dell'alert
    const [alertMessage, setAlertMessage] = useState("");
    const getBase64 = async (file) => {
        let reader = new FileReader();
        await reader.readAsDataURL(file);
        reader.onload = function () {
            setImages((prevImages) => [
                ...prevImages,
                {
                    name: file.name,
                    image: reader.result.replace(base64prefix, ''),
                    idProject: id,
                }
            ]);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };


    const handleChange = (e) => {
        const { files } = e.target;
        for (let i = 0; i < files.length; i++) {
            getBase64(files[i])
        }
    };
    const imageDeleteData = useDelete("http://localhost:8080/admin/delete/image", token)
    const imagePostData = usePost('http://localhost:8080/admin/create/image', token)
    const imagePutData = usePut('http://localhost:8080/admin/update/image', token)

    const submitSuccess = () => {
        setAlertMessage('Salvataggio completato');
        setAlertShow(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        images.forEach((image, index) => {
            if (data && data[index]) {
              const imageId = data[index].id;
              if (imageId) {
                imagePutData(imageId, image, submitSuccess);
              } else {
                imagePostData(image, submitSuccess);
              }
            } else {
              imagePostData(image, submitSuccess);
            }
          });
        

    };
    const performDelete = (index) => {
        if (data[index].id > 0) {
            const imageID = data[index].id;
            if (imageID) {
                imageDeleteData(imageID, submitSuccess)
            }
        } else {
            const imageToRemove = [...images];
            imageToRemove.splice(index, 1);
            setImages(imageToRemove)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div> {images.map((image, index) => (
                image.image && (
                    <div key={index}>
                      <img src={`${base64prefix}${image.image}`} alt={image.name.replace('.jpg', '')} className="preview-image" />
                      <div className="text-red-600 cursor-pointer" onClick={() => performDelete(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                    </div>
                  )
          
            ))}
                <input type="file" className="file:bg-gradient-to-b file:from-blue-600 file:to-blue-700 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-blue-700/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full  cursor-pointer shadow-xl shadow-gray-700/60" name="image" multiple onChange={handleChange} />
            </div>
            <button type='submit'>salva</button>
        </form>
    )
}

export default ImageForm