import React, { useEffect, useState } from 'react';
import { Modal, Typography, TextField, Button } from '@mui/material';
import { useDelete, usePost, usePut } from '../../../_Utils/Hooks';

export default function AddImagesModal({ open, onClose, data, id }) {
    const token = localStorage.getItem('access_token');
    const base64prefix = "data:image/jpeg;base64,"
    const [alertShow, setAlertShow] = useState(false); // Variabile di stato per gestire la visualizzazione dell'alert
    const [alertMessage, setAlertMessage] = useState("");
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
    
    

    const imageDeleteData = useDelete("http://localhost:8080/admin/delete/image", token)
    const imagePostData = usePost('http://localhost:8080/admin/create/image', token)
    const imagePutData = usePut('http://localhost:8080/admin/update/image', token)


    const getBase64 = async (file) => {
        let reader = new FileReader();
        await reader.readAsDataURL(file);
        reader.onload = function () {
            setImages((prevImages) => [
                ...prevImages,
                {
                    name: file.name,
                    image: reader.result.replace(base64prefix, '')
                }
            ]);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
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
        <Modal open={open} onClose={onClose}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', minWidth: '300px' }}>
                <Typography variant="h6">Aggiungi immagini</Typography>
                <form onSubmit={handleSubmit}>
                    {/* Aggiungi i campi del form qui */}
                    <TextField label="Nome immagine" />
                    <Button type="submit">Aggiungi</Button>
                </form>
            </div>
        </Modal>
    );
}
