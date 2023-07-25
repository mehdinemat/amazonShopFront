import { Box, Button, ButtonGroup, Fade, FocusLock, FormControl, FormLabel, HStack, IconButton, Input, List, ListItem, OrderedList, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, ScaleFade, Show, Slide, SlideFade, Stack, UnorderedList, VStack, useBoolean, useDisclosure, Text } from '@chakra-ui/react'
import React, { forwardRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../redux/actions/category'
import _ from 'lodash'
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







      <HStack w={'100%'} justifyContent={'space-between'}>
        {
          category && category?.categories.map((item) =>
          (
            <Box h={'100%'} onMouseEnter={() => {
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
      {(flag && categoryShow[0]) ? <Stack onMouseEnter={setFlag.on} style={{ backgroundColor: '#d9d9d900' }} onMouseLeave={setFlag.off} position={'absolute'} marginTop={'-10px'} w={'100%'}>
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
          width={'100%'}
        >
          {
            categoryShow[0] && categoryShow?.[0].map((item, index) => (
              index > 0 && ((item?.children?.length > 0 || parentList.includes(item.parentId))?
                <Text color={'blackAlpha.700'} w={'100%'} textAlign={'left'} cursor={'pointer'}>{item.name}</Text>
                : <Text w={'100%'} color={'blackAlpha.500'} textAlign={'left'}>
                  {item.name}
                </Text>)
            ))
          }
        </Box>
      </Stack> : ''}
    </Stack>
  )
}

export default Menuheader
