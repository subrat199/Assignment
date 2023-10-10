import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  Heading,
  Center,
  VStack,
  Spinner,
  Avatar,
  Badge,
  Grid,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { CheckIcon } from "@chakra-ui/icons";
import axios from "axios";
import { setJobListings, setSearchLanguage } from "../redux/actions";
import { Link,useNavigate } from "react-router-dom";
import JobDetails from "./JobDetails";
const Home = () => {
  const searchLanguage = useSelector((state) => state.searchLanguage);
  const jobListings = useSelector((state) => state.jobListings);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  console.log(jobListings.results, "11");
  console.log(searchLanguage, "Language")
  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6f3dbf0b&app_key=3d70b0b26e06011896051fc37fbb7a35&what=${searchLanguage}`
      );
      console.log(response);
      dispatch(setJobListings(response.data));
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };
  return (
    <>
    <Center h="100vh">
      <VStack spacing={6}>
        <Heading size="xl">Find Jobs</Heading>
        <Text fontSize="lg">
          Enter a programming language to search for jobs:
        </Text>
        <Box>
          <Input
            type="text"
            placeholder="Enter a programming language"
            value={searchLanguage}
            onChange={(e) => dispatch(setSearchLanguage(e.target.value))}
          />
        </Box>
        <Button onClick={handleSearch} colorScheme="blue">
          Search Jobs
        </Button>
        {loading && <Spinner size="lg" />}
        {jobListings.results?.length > 0 && (
          <Box>
            <Heading size="md" mt={4}>
              Jobs Found:
            </Heading>

            <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
              {jobListings.results?.map((job, index) => (
                <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
                  <Avatar src={job.company.logo_url} size="sm" />
                  <Text fontSize="lg">{job.title}</Text>
                  <Badge colorScheme="blue">
                    {job.company.display_name}
                  </Badge>{" "}
                  <br />
                  <Link to={`/job/${job.id}`} key={index}>
                  <Button mt={"5px"} bg={"pink"} >
                    Details
                  </Button>
                  </Link>
                 
                </Box>
              ))}
            </Grid>
          </Box>
        )}
      </VStack>
    </Center>
    </>
    
  );
};

export default Home;
/*
   <Center py={6} display={"grid"} gridTemplateColumns={'repeat(4,1fr)'}>
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
                     'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
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
                 <Heading fontSize={'2xl'} fontFamily={'body'}>
                   Lindsey James
                 </Heading>
                 <Text fontWeight={600} color={'gray.500'} mb={4}>
                   @lindsey_jam3s
                 </Text>
                 <Text
                   textAlign={'center'}
                   color={('gray.700', 'gray.400')}
                   px={3}>
                   Actress, musician, songwriter and artist. PM for work inquires or{' '}
                   <Text color={'blue.400'}>#tag</Text> me in your posts
                 </Text>
         
                 <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                   <Badge
                     px={2}
                     py={1}
                     bg={('gray.50', 'gray.800')}
                     fontWeight={'400'}>
                     #art
                   </Badge>
                   <Badge
                     px={2}
                     py={1}
                     bg={('gray.50', 'gray.800')}
                     fontWeight={'400'}>
                     #photography
                   </Badge>
                   <Badge
                     px={2}
                     py={1}
                     bg={('gray.50', 'gray.800')}
                     fontWeight={'400'}>
                     #music
                   </Badge>
                 </Stack>
         
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

* */
