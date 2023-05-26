import React, { useState } from 'react';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import { useDelete, useDeleteProject, useGetToken } from '../../../_Utils/Hooks';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Alert, AlertTitle, Button, Grid, IconButton, Popover } from '@mui/material';
import { Divider, Typography } from '@material-ui/core';

import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
import AddImagesModal from '../ManageImagesModal/ManageImagesModal';
import AddProductsModal from '../ManageProductsModal/ManageProductsModal'
import AddIcon from '@mui/icons-material/Add';
import AddProject from '../AddProject/AddProject';
import EditProject from '../EditProject/EditProject';


export default function Layout() {

  const token = localStorage.getItem('access_token')
  const navigate = useNavigate()
  const [idProject, setIdProject] = useState(0)
  const { data: projects } = useGetToken("http://localhost:8080/admin/projects", token)
  const { data: images, error } = useGetToken('http://localhost:8080/admin/project/images', token, idProject);
  const { data: products, err } = useGetToken('http://localhost:8080/admin/project/products', token, idProject);
  const { data: projectById, e } = useGetToken('http://localhost:8080/admin/project', token, idProject)
  const deleteProject = useDeleteProject('http://localhost:8080/admin/delete/project', idProject, token)

  const [anchorEl, setAnchorEl] = useState(null);
  const [openProjectModal, setOpenProjectModal] = useState(false)
  const [open, setOpen] = useState(false);
  const [openEditProjects, setOpenEditProjects] = useState(false)
  const [openProductModal, setOpenProductModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [alertShow, setAlertShow] = useState(false)

  const handleOpenPopover = (event, project) => {
    setAnchorEl(event.currentTarget);
    setIdProject(project.id)
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleOpenAddImagesModal = () => {
    setOpen(true);
  };

  const handleCloseAddImagesModal = () => {
    setOpen(false);

  };
  const handleOpenAddProductsModal = () => {
    setOpenProductModal(true);
  };

  const handleCloseAddProductsModal = () => {
    setOpenProductModal(false);
  };
  const handleOpenAddProjectModal = () => {
    setOpenProjectModal(true);
  };

  const handleCloseAddProjectModal = () => {
    setOpenProjectModal(false);
  };
  const handleOpenEditProjectModal = (project) => {
    setOpenEditProjects(true);
    setIdProject(project.id)
  };

  const handleCloseEditProjectModal = () => {
    setOpenEditProjects(false);
  };

  const deleteCheck = (project) => {
    setAlertShow(true)
    setIdProject(project.id)
    setAlertMessage(`Sei sicuro di voler eliminare il seguente progetto: ${project.name} ?`)
    
  }

  const performDelete = () => {
    setConfirmDelete(true)
    setAlertShow(false)
    deleteProject(deleteConfirmed)
  }
  const deleteConfirmed = () => {
    setAlertMessage('Eliminazione avvenuta con successo')
    navigate("/admin")
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      sortable: false,
      width: 70,
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Nome',
      sortable: false,
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'city',
      headerName: 'Città',
      sortable: false,
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'address',
      headerName: 'Indirizzo',
      sortable: false,
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'update',
      headerName: 'Modifica',
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params) => (
        <IconButton onClick={() => handleOpenEditProjectModal(params.row)} aria-label="delete" size="medium">
          <EditIcon color='primary' fontSize="inherit" />
        </IconButton>
      )
    },
    {
      field: 'Elimina',
      headerName: 'Elimina',
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => deleteCheck(params.row)} aria-label="delete" size="medium">
            <GridDeleteIcon color='error' fontSize="inherit" />
          </IconButton>
        </div>
      )
    },

    {
      field: 'actions',
      headerName: 'Azioni',
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div>

          <IconButton
            onClick={(event) => handleOpenPopover(event, params.row)}
            aria-describedby={`popover-${params.row.id}`}
          >
            <MoreVertIcon />
          </IconButton>
          <Popover
            id={`popover-${params.row.id}`}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 0,
              horizontal: 'right',
            }}
            sx={{
              '& .MuiPopover-paper': {
                backgroundColor: '#000',
                minWidth: 200,
              },
            }}
          >
            <Typography style={{ p: 2, color: '#fff', textAlign: 'center' }}>
              <Link onClick={handleOpenAddImagesModal}>Gestisci immagini</Link>
              <Divider />
              <Link onClick={handleOpenAddProductsModal}>Gestisci prodotti</Link>
            </Typography>
          </Popover>
        </div>
      ),
    },
    {
      field: 'Add',
      headerName: 'Aggiungi progetto',
      sortable: false,
      flex: 2,
      disableColumnMenu: true,
      renderHeader: () => (
        <div>
          Aggiungi Progetto
          <IconButton onClick={handleOpenAddProjectModal} aria-label="create-project">
            <AddIcon color='success' fontSize="small" />
          </IconButton>
        </div>
      )
    },
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={projects || []}
        autoHeight
        columns={columns}
        
      />
      {alertShow && (
       <Alert severity="error">
       <AlertTitle>Azione irreversibile in corso...</AlertTitle>
       <Grid container>
         <Grid item xs={12} md={12}>
           {alertMessage}
         </Grid>
         <Grid container  style={{ marginTop: '16px' }}>
           <Button color='error' variant='contained' onClick={() => performDelete()} item xs={12} md={6}>Si</Button>
           <Button style={{ marginLeft: '8px' }} onClick={() => setAlertShow(false)} variant='outlined' color='error' item xs={12} md={6}>No</Button>
         </Grid>
       </Grid>
     </Alert>)}
      {confirmDelete && (
        <Alert severity="success">
          <AlertTitle>Error</AlertTitle>
          <Grid container >
            <Grid item xs={12} md={12}>
              {alertMessage}
            </Grid>
            <Grid >
              <Button color='success' onClick={() => setConfirmDelete(false)}>Chiudi</Button>
            </Grid>
          </Grid>
        </Alert>)}

      <AddImagesModal open={open} onClose={handleCloseAddImagesModal} data={images} id={idProject} />
      <AddProductsModal open={openProductModal || false} onClose={handleCloseAddProductsModal} data={products} id={idProject} />
      <AddProject open={openProjectModal || false} onClose={handleCloseAddProjectModal} />
      <EditProject open={openEditProjects} onClose={handleCloseEditProjectModal} data={projectById} />
    </div>
  );

}
