import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import { getProductSlug } from '../../redux/actions/proudct'
import { useParams } from 'react-router-dom'
const ProductPageList = (props) => {

  const {slug} = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(getProductSlug({param:slug}))
  }, [])

  return (
    <Layout>
      productapge list
    </Layout>
  )
}

export default ProductPageList
