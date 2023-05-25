import React, { useState, Fragment } from 'react';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import { useGetToken } from '../../../_Utils/Hooks';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Popover } from '@mui/material';
import { Divider, Typography } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import AddImagesModal from '../AddImagesModal/AddImagesModal';
export default function ProjectRow() {

  const token = localStorage.getItem('access_token')
  const { data: projects } = useGetToken("http://localhost:8080/admin/projects", token)
  const [anchorEl, setAnchorEl] = useState(false);
  const [isAddImagesModalOpen, setIsAddImagesModalOpen] = useState(false);
  const [idProject, setIdProject] = useState(0)

  const handleOpenPopover = (event, project) => {
    setAnchorEl(event.currentTarget);
    setIdProject(project.id)
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const handleOpenAddImagesModal = () => {
    setIsAddImagesModalOpen(true);
  };
  
  const handleCloseAddImagesModal = () => {
    setIsAddImagesModalOpen(false);
  };
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Progetto', width: 130 },
    { field: 'description', headerName: 'Descrizione', width: 130 },
    {
      field: 'address',
      headerName: 'Indirizzo',
      type: 'number',
      width: 120,
    },
    {
      field: 'city',
      headerName: 'Città',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 90,
    },
    {
      field: 'update',
      headerName: 'Modifica',
      width: 80,
      renderCell: (params) => (
        <IconButton aria-label="delete" size="medium">
        <EditIcon fontSize="inherit" />
      </IconButton>
      )
    },
    {
      field: 'Elimina',
      headerName: 'Elimina',
      width: 100,
      renderCell: (params) => (
        <IconButton aria-label="delete" size="medium">
          <GridDeleteIcon fontSize="inherit" />
        </IconButton>
      )
    },
    
    {
      field: 'actions',
      headerName: 'Azioni',
      width: 100,
      renderCell: (params) => (
        <IconButton
          onClick={(event) => handleOpenPopover(event, params.row)}
          aria-describedby={`popover-${params.row.id}`}
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
   
  ];

  console.log(projects)
  if (projects) {

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={projects}
          columns={columns}
        />
        {projects && (
          projects.map((project) => (
            <Fragment key={project.id}>
              <Popover
                id={`popover-${project.id}`}
                open={anchorEl}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                sx={{
                  '& .MuiPopover-paper': {
                    backgroundColor: '#000',
                    minWidth: 200,
                  },
                }}
              >
                <Typography style={{ p: 2, color: '#fff', textAlign: 'center' }}>
                  <Link onClick={handleOpenAddImagesModal}>Aggiungi immagini</Link>
                  <Divider />
                  <Link>Aggiungi prodotti</Link>
                  <Divider />
                  <Link>Modifica immagini</Link>
                  <Divider />
                  <Link>Modifica prodotti</Link>
                  </Typography>
              </Popover>
            </Fragment>
          ))
        )}
        <AddImagesModal open={isAddImagesModalOpen || false} onClose={handleCloseAddImagesModal} data={projects} id={idProject} />
      </div>
    );
  }
}
