import { useParams } from 'react-router-dom'
import Navbar from '../Projects/AdminNav/Navbar'
import ProductForm from './ProductForm'
const NewProduct = () => {
const {id} = useParams()
    return (
        <>
            <section className=''>
                <Navbar />
                <h5 className='text-black text-4xl'>Nuovo progetto</h5>
                <ProductForm id={id}/>
            </section>
        </>
    )



}

export default NewProduct