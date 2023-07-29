import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductSlug } from '../../redux/actions/proudct'
import { useParams } from 'react-router-dom'
import { Stack, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, CardBody, Card, Image, HStack, Divider } from '@chakra-ui/react'
const ProductPageList = (props) => {

  const { slug } = useParams()

  const { product } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getProductSlug({ param: slug }))
  }, [])

  useEffect(() => {
    console.log(product, ' product t ')
  }, [product])

  return (
    <Layout>
      <VStack>
        {
          product?.productByPrice.map((item) =>
          (Object.keys(item).length > 1 &&
            <Stack w={'100%'} alignItems={'end'} >
              <Card w={'100%'} m={'6px'}>
                <CardBody>
                  <Accordion defaultIndex={[0]} allowMultiple w={'100%'} py={'5px'} >
                    <AccordionItem>
                      <h2 style={{ direction: 'rtl' }}>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='right'>
                            {item.title}
                          
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} textAlign='right'>
                            <Divider />
                        <HStack w={'100%'} justifyContent={'right'}>
                        {
                          item[0].map((v)=>(
                              <VStack w={'10%'}>
                                <img src={`localhost:2000/public/${v?.productPicture?.[0]?.img}`}/>
                                <Text>{v.description}</Text>
                                <Text>{v.price}</Text>
                              </VStack>
                          ))
                        }
                        </HStack>
                       {console.log(item , 'teimmmmmmmm')}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </CardBody>
              </Card>
            </Stack>)

          )
        }

      </VStack>
    </Layout>
  )
}

export default ProductPageList
