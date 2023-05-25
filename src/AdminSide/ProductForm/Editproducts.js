import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetToken } from '../../_Utils/Hooks';
import ProductForm from './ProductForm';

const EditProduct = ({ token }) => {
  const { id } = useParams();
  const { data, error } = useGetToken(
    'http://localhost:8080/admin/project/products',
    token,
    id
  );

  if (data) {
    return (
      <div className="m-2 p-2 border">
        <h5 className="text-4xl text-black">Modifica progetto</h5>
          <ProductForm data={data} id={id} />
      </div>
    );
  }
};

export default EditProduct;
