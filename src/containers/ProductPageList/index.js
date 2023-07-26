import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import { getProductSlug } from '../../redux/actions/proudct'
import { useParams } from 'react-router-dom'
import { Stack, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from '@chakra-ui/react'
const ProductPageList = (props) => {

  const { slug } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getProductSlug({ param: slug }))
  }, [])

  return (
    <Layout>
      <VStack>
        <Stack w={'100%'} alignItems={'end'} >
          <Accordion defaultIndex={[0]} allowMultiple w={'100%'} py={'5px'}>
            <AccordionItem>
              <h2 style={{direction:'rtl'}}>
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
              <h2 style={{direction:'rtl'}}>
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
