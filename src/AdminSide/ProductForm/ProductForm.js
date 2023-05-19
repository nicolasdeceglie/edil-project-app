import React, { useEffect, useState } from 'react'
import { usePost, usePut } from '../../_Utils/Hooks';


const ProductForm = ({ data = {}, id }) => {
  const token = localStorage.getItem('access_token');
  const [alertShow, setAlertShow] = useState(false); // Variabile di stato per gestire la visualizzazione dell'alert
  const [alertMessage, setAlertMessage] = useState("");

  const [product, setProduct] = useState([{
    product: '',
    idProject: id
  }])
  const [image, setImage] = useState({
    image: '',
    name: '',
    idProject: id
  })
  useEffect(() => {
    if (data.id > 0) {
      setProduct([{ ...data, idProject: id }]);
    }
  }, [data, id])
  const productPostData = usePost('http://localhost:8080/admin/create/product', token)
  const projectPutData = usePut('http://localhost:8080/admin/update/product', data.id, token)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.id > 0) {
      product.forEach((product) => {
        projectPutData(product, submitSuccess );
      });
    } else {
      product.forEach((product) => {
        productPostData(product, submitSuccess)
      });
    }
    // Codice per Salvataggio

  }
  const submitSuccess = () => {
    setAlertMessage("Salvataggio completato")
    setAlertShow(true);
  }
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setProduct((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index] = { ...updatedProducts[index], [name]: value };
      return updatedProducts;
    });

   
  

  

    // setImage((prevValues) => {
    //   return {
    //     ...prevValues,
    //     [e.target.name]: e.target.value
    //   }
    // })

  };
  const handleAddProduct = () => {
    setProduct([...product, { product: '', idProject: id }]);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
    <div className="bg-blue-800 h-screen gap-3 overflow-hidden flex flex-col items-center justify-center">
      {product.map((product, index) => (
        <div key={product.id || index}>
          <label className="text-black">
            Prodotto {index + 1}
            <input
              type="text"
              className="text-black"
              name="product"
              value={product.product}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
        </div>
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
  
}

export default ProductForm 
