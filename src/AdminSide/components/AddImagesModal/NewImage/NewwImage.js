import React from 'react'
import { useParams } from 'react-router-dom'

import AddImagesModal from '../AddImagesModal'

const NewwImage = () => {

  const { id } = useParams()
  return (
    <>
      <AddImagesModal id={id} />
    </>
  )
}

export default NewwImage