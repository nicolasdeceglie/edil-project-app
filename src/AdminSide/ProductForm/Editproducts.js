import React from 'react'
import { useGet, useGetToken } from '../../_Utils/Hooks'
import ProductForm from './ProductForm'
import { useParams } from 'react-router-dom'
const EditProduct = ({token}) => {
  const {id} = useParams()
  const {data, error} = useGetToken('http://localhost:8080/admin/project/products', token, id)
  console.log(data)

  if (data) {
    return (
      <div className='m-2 p-2 border'>
        <h5 className='text-4xl text-black'>Modifica progetto</h5>
        {data.map((productData, index) => (
          <ProductForm key={`${productData.id}-${index}`} data={productData} id={id} />
        ))}
      </div>
    );
  }
}

export default EditProduct