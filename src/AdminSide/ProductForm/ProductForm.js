import React, { useEffect, useState } from 'react';
import { useDelete, usePost, usePut } from '../../_Utils/Hooks';

const ProductForm = ({ data, id }) => {
  const token = localStorage.getItem('access_token');
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

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
    if (data) {
      products.forEach((product, index) => {
        const productId = data[index].id
        productPutData(productId, product, submitSuccess);
      });
    } else {
      products.forEach(product => {
        productPostData(product, submitSuccess);
      })
    }
  };
  const performDelete = (index) => {
    if (data) {
      const imageID = data[index].id;
      if (imageID) {
        productDeleteData(imageID, submitSuccess)
      }
    } else {
      const productToRemove = [...products];
      productToRemove.splice(index, 1);
      setProducts(productToRemove);
    }
  }


  const submitSuccess = () => {
    setAlertMessage('Salvataggio completato');
    setAlertShow(true);
  };

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

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="bg-blue-800 h-screen gap-3 overflow-hidden flex flex-col items-center justify-center">
        {products.map((product, index) => (
          product.product && (
          <div key={index}>
            <label className="text-black">
              Prodotto {index + 1}
              <input type="text" className="text-black" name="product" value={product.product} onChange={(e) => handleChange(e, index)}/>
            </label>
            <div className="text-red-600 cursor-pointer" onClick={() => performDelete(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
          </div>
          )
        ))}
        <button type="button" onClick={handleAddProduct}>
          Aggiungi prodotto
        </button>
        <button className="text-black" type="submit">
          Salva
        </button>
      </div>
    </form>
  );
};

export default ProductForm;