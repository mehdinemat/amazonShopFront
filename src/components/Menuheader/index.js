import { Box, Button, ButtonGroup, Fade, FocusLock, FormControl, FormLabel, HStack, IconButton, Input, List, ListItem, OrderedList, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, ScaleFade, Show, Slide, SlideFade, Stack, UnorderedList, VStack, useBoolean, useDisclosure, Text, Grid, GridItem, SimpleGrid, Link } from '@chakra-ui/react'
import React, { forwardRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../redux/actions/category'
import _, { flow } from 'lodash'
const Menuheader = () => {

  const { isOpen, onToggle } = useDisclosure()
  const [flag, setFlag] = useBoolean()
  const [categoryList, setCategoryList] = useState()
  const [categoryShow, setCategoryShow] = useState()
  const [parentList, setParentList] = useState()

  const dispatch = useDispatch()
  const { category } = useSelector(state => state)

  useEffect(() => {

    dispatch(categories())

  }, [])

  const renderedCategory = (category) => {

    return (
      <VStack alignItems={'start'} justifyContent={'start'} >
        <List position={'relative'}>
          <ListItem position={'position'}>
            {category?.parentId && category?.name}
            {category?.children?.length > 0 && category?.children?.map((item) => (renderedCategory(item)))}
          </ListItem>
        </List>
      </VStack>
    )

  }

  const getCategoryList = (category, categoryList = []) => {
    categoryList.push(category)
    category?.children.length > 0 && category?.children?.map((item) => { getCategoryList(item, categoryList) })
    return categoryList
  }

  useEffect(() => {

    setCategoryList([...category?.categories.map((item) => (getCategoryList(item)))])
    setParentList(category?.categories?.map((item) => (!item?.parentId && item?.id)))
  }, [category?.categories])

  useEffect(() => {

    console.log(categoryList, 'categoryList')

  }, [categoryList])

  const handleCategoryShow = (id) => {
    console.log(id, 'id')
    setCategoryShow(categoryList.filter((item) => (item.filter((v) => (v.parentId === id)).length > 0)))
    setFlag.on()
  }

  useEffect(() => {

    console.log(categoryShow, 'categoryShow')
  }, [categoryShow])

  useEffect(() => {
    console.log(parentList, 'parentList')
  }, [parentList])


  return (
    <Stack h={'50px'} backgroundColor={'white'} shadow={'base'} alignItems={'center'} justifyContent={'center'}>


      {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid> */}




      <HStack w={'90%'} justifyContent={'space-between'}>
        {
          category && category?.categories.map((item) =>
          (
            <Box h={'100%'} cursor={'pointer'} onMouseEnter={() => {
              handleCategoryShow(item.id)
            }} onMouseLeave={setFlag.off}>{!item?.parentId && item?.name}</Box>
          ))
        }
        {/* {
          category && category?.categories.map((item) => (
            renderedCategory(item)
          ))
        } */}

      </HStack>
      {(flag && categoryShow[0]) ? <Stack onMouseEnter={setFlag.on} alignItems={'center'} style={{ backgroundColor: '#d9d9d900' }} onMouseLeave={setFlag.off} position={'absolute'} marginTop={'-10px'} w={'100%'}>
        <Box
          paddingBottom={'50px'}
          paddingTop={'50px'}
          position={'absolute'}
          p='40px'
          color='black'
          mt='4'
          bg='white'
          rounded='md'
          shadow='sm'
          height={'350px'}
          width={'95%'}
          dir='rtl'
        >
          <Stack
           style={{display:'flex' , flexDirection:'column' ,alignContent:'flex-start' , flexWrap:'wrap' , height:'350px'}}
           >
            {
              categoryShow[0] && categoryShow?.[0].map((item, index) => (
                index > 0 && (<Box  height={'15px'} width={'250px'} alignItems={'end'} justifyContent={'right'}>
                  {
                    (item?.children?.length > 0 || parentList.includes(item.parentId)) ?
                      <Link href={item.slug}  color={'blackAlpha.700'}  textAlign={'right'} justifyContent={'end'} cursor={'pointer'} width={'100%'} display={'block'}>{item.name}</Link>
                      : <Link href={item.slug} w={'auto'} color={'blackAlpha.500'} textAlign={'right'} cursor={'pointer'} display={'block'}>
                        {item.name}
                      </Link>
                  }
                </Box>)
              ))
            }
          </Stack>
        </Box>
      </Stack> : ''}
    </Stack>
  )
}

export default Menuheader
