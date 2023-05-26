import React, { useEffect, useState } from 'react'
import { usePutProject } from '../../../_Utils/Hooks';
import { Alert, Button, Modal, TextField } from '@mui/material';
import { Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const EditProject = ({ data = {}, open, onClose }) => {
    const token = localStorage.getItem('access_token')
    const navigate = useNavigate()
    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const [project, setProject] = useState({
        name: '',
        description: '',
        address: '',
        city: '',
        cap: ''
    });

    useEffect(() => {
        if (data.id > 0) {
            setProject({
                name: data.name,
                description: data.description,
                address: data.address,
                city: data.city,
                cap: data.cap
            });
        }
    }, [data])


    const projectPutData = usePutProject('http://localhost:8080/admin/update/project', token, data.id)
    const handleSubmit = (e) => {
        e.preventDefault();
        projectPutData(project, submitSuccess);
    }
    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato")
        setAlertShow(true);
        console.log(alertShow)
    }
    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/admin")
    }
    const handleChange = (e) => {
        setProject((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', minWidth: '300px', borderRadius: '8px' }}>
                <Typography variant="h6" style={{ textAlign: 'center', marginBottom: '20px' }}>Aggiungi Prodotti</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Nome"
                                name="name"
                                value={project.name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="City"
                                name="city"
                                value={project.city}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="CAP"
                                name="cap"
                                value={project.cap}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Address"
                                name="address"
                                value={project.address}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Descrizione"
                                multiline
                                name="description"
                                value={project.description}
                                onChange={handleChange}
                                rows={4}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Button type="submit" variant="contained" color="success">
                                Salva
                            </Button>
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

export default EditProject