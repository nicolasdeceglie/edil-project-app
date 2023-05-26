import React, { useEffect, useState } from 'react';
import { Modal, Typography, TextField, Button, IconButton, Alert } from '@mui/material';
import { useDelete, usePost, usePut } from '../../../_Utils/Hooks';
import { Grid } from '@material-ui/core';
import { GridDeleteIcon } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const AddProductsModal = ({ open, onClose, data, id }) => {
  const token = localStorage.getItem('access_token');
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate= useNavigate()

  const [products, setProducts] = useState([
    {
      product: '',
      idProject: id
    }
  ]);
  useEffect(() => {
    if (data) {
      const product = data.map((item) => ({
        product: item.product,
        idProject: item.idProject
      }));
      setProducts(product);
    }
  }, [data]);

  const productPostData = usePost('http://localhost:8080/admin/create/product', token);
  const productDeleteData = useDelete("http://localhost:8080/admin/delete/product", token);
  const productPutData = usePut('http://localhost:8080/admin/update/product', token);

  const handleSubmit = (e) => {
    e.preventDefault();

    products.forEach((product) => {
      const productId = product.id
      if (productId) {
        productPutData(productId, product, submitSuccess);
      } else {
        productPostData(product, submitSuccess);
      }
    });

  };

  const submitSuccess = () => {
    setAlertMessage('Modifiche avvenute correttamente');
    setAlertShow(true);
  };
  const alertDismiss = () => {
    setAlertShow(false)
    navigate("/admin")
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setProducts((prevProduct) => {
      const updatedProduct = [...prevProduct];
      updatedProduct[index] = { ...updatedProduct[index], [name]: value };
      return updatedProduct;
    });
  };

  const handleAddProduct = () => {
    setProducts([...products, { product: '', idProject: id }]);
  };
  const performDelete = (index) => {
    if (data[index].id) {
      const imageID = data[index].id;
      productDeleteData(imageID, submitSuccess);
      setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));

    } else {
      setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', minWidth: '300px', borderRadius: '8px' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: '20px' }}>Aggiungi Prodotti</Typography>
        <form onSubmit={handleSubmit}>
          {products.map((product, index) => (
            <Grid key={index} container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label={`Prodotto ${index + 1}`}
                  name='product'
                  value={product.product}
                  onChange={(e) => handleChange(e, index)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton onClick={() => performDelete(index)}>
                  <GridDeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button type="button" color="primary" onClick={handleAddProduct}>
                Aggiungi
              </Button>
            </Grid>
            <Grid item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

export default AddProductsModal