import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductSlug } from '../../redux/actions/proudct'
import { useParams } from 'react-router-dom'
import { Stack, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, CardBody, Card, Image } from '@chakra-ui/react'
const ProductPageList = (props) => {

  const { slug } = useParams()

  const { product } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getProductSlug({ param: slug }))
  }, [])

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
                       {console.log(item , 'teimmmmmmmm')}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </CardBody>
              </Card>
            </Stack>)

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        <Stack w={'100%'} alignItems={'end'} >
          <Accordion defaultIndex={[0]} allowMultiple w={'100%'} py={'5px'}>
            <AccordionItem>
              <h2 style={{ direction: 'rtl' }}>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='right'>
                    موبایل ارزان تر از 5 میلیون
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign='right'>
                این برای تست هست این برای تست هست این برای تست هست این برای تست هست این برای تست هست این برای تست هست

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        <Stack w={'100%'} alignItems={'end'} >
          <Accordion defaultIndex={[0]} allowMultiple w={'100%'} py={'5px'}>
            <AccordionItem>
              <h2 style={{ direction: 'rtl' }}>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='right'>
                    موبایل ارزان تر از 5 میلیون
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign='right'>
                این برای تست هست این برای تست هست این برای تست هست این برای تست هست این برای تست هست این برای تست هست

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </VStack>
    </Layout>
  )
}

export default ProductPageList
