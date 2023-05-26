import React, { useEffect, useState } from 'react';
import { Modal, Typography, TextField, Button, IconButton, Alert } from '@mui/material';
import { useDelete, usePost, usePut } from '../../../_Utils/Hooks';
import { Grid, ImageList } from '@material-ui/core';
import { GridDeleteIcon } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export default function AddImagesModal({ open, onClose, data, id }) {
    const token = localStorage.getItem('access_token');
    const base64prefix = "data:image/jpeg;base64,"
    const navigate = useNavigate()
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
                    image: reader.result.replace(base64prefix, ''),
                    idProject: id
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
    const alertDismiss = () =>{
        setAlertShow(false)
        navigate("/admin")
    }
    const handleChange = (e) => {
        const { files } = e.target;
        for (let i = 0; i < files.length; i++) {
            getBase64(files[i])
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        images.forEach((image) => {
            const imageId = image.id;
            if (imageId) {
                imagePutData(imageId, image, submitSuccess);
            }
            else {
                imagePostData(image, submitSuccess);
            }
        });
    };
    const performDelete = (index) => {
        if (data[index].id) {
            const imageID = data[index].id;
            imageDeleteData(imageID, submitSuccess);
            setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        } else {
            setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        }
    };


    return (
        <Modal open={open} onClose={onClose}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', minWidth: '300px', borderRadius: '8px' }}>
                <Typography variant="h6" style={{textAlign: 'center'}}>Gestisci immagini</Typography>
                <form onSubmit={handleSubmit}>
                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} >
                        {images.map((image, index) => (
                            image.image && (
                                <div key={index} className='position-relative'>
                                    <img src={`${base64prefix}${image.image}`} alt={image.name.replace('.jpg', '')} className="w-100 object-cover " />
                                    <IconButton onClick={() => performDelete(index)}>
                                        <GridDeleteIcon color='error' />
                                    </IconButton>
                                </div>
                            )
                        ))}
                    </ImageList>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <input
                                type="file"
                                className="file-input"
                                name="image"
                                multiple
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button color="success" type="submit">Salva</Button>
                        </Grid>
                    </Grid>
                </form>
                {alertShow && (
          <Alert onClose={alertDismiss} severity="success">
            {alertMessage}
          </Alert>
        )}
            </div>
        </Modal>
    );
}
