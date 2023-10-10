import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Badge, Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react';

const UserDetails = () => {
    const data=useSelector((state)=>state.userdata)
    console.log(data,"data")
  return (
    <Center
     py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png            '
       }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'} color={'white'}>
        Name:  {
            data.name
          }
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
         Email: {
            data.email
          }
        </Text>
          <Text  textAlign={'center'}
          color={('gray.700', 'gray.400')}
          px={3} >Description:{data.coverLetter}</Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default UserDetails