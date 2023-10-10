import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";

function JobDetails() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const searchLanguage = useSelector((state) => state.searchLanguage);
  console.log(searchLanguage, "search");
  useEffect(() => {
    async function fetchJobDetails() {
      try {
        const response = await axios.get(
          `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6f3dbf0b&app_key=3d70b0b26e06011896051fc37fbb7a35&what=${searchLanguage}&what_and=${id}`
        );
        console.log(response, "check");
        setJobDetails(response.data?.results);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchJobDetails();
  }, [id]);
  console.log(jobDetails, "jobDetails 24");
  console.log(id, "id");
  return (
    <VStack spacing={6}>
      {jobDetails ? (
        <>
          <Center py={6}>
            <Box
              maxW={"445px"}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  h={"220px"}
                  w={"900%"}
                  m={"auto"}
                  src={
                    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  }
                  fill
                  alt="Example"
                />
              </Box>
              <Stack>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Title: {jobDetails[0]?.title}
                </Heading>
              </Stack>
              <Text color={"gray.500"} fontSize={"xl"} fontFamily={"body"}>
                Category: {jobDetails[0]?.category.tag}
              </Text>
              <Stack mt={3} direction={"row"} spacing={4} align={"center"}>
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600} color={"grey"} textAlign={"left"}>
                    Description:{jobDetails[0]?.description}
                  </Text>
                  <Text color={"gray.400"} textAlign={"left"}>
                    Location:{jobDetails[0]?.location.area.join(",")}
                  </Text>
                  <Text color={"gray.400"} textAlign={"left"}>
                    ContractType:{jobDetails[0]?.contract_type}
                  </Text>
                </Stack>
              </Stack>
              <Text color={"gray.400"} textAlign={"left"}>
                Salary:{jobDetails[0]?.salary_max}
              </Text>
            </Box>
          </Center>
          <Link to={`/apply`}>
            <Button colorScheme="blue">Apply</Button>
          </Link>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </VStack>
  );
}

export default JobDetails;
