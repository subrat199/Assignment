import React, { useState } from "react";
import { Box, Heading, Input, Text, Textarea, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userdata } from "../redux/actions";
function ApplyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch=useDispatch()
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [data, setData] = useState([]);
  const handleApply = () => {
    const userdetails = {
      name,
      email,
      coverLetter,
    };
    setData(userdetails)
    console.log(data);
   dispatch(userdata(userdetails))
  };

  return (
    <Box w="40%" m={"auto"}>
      <Heading size="xl">Apply for the Job</Heading>
      <Box mt={4}>
        <Text>Name:</Text>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box mt={4}>
        <Text>Email:</Text>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box mt={4}>
        <Text>Cover Letter:</Text>
        <Textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          rows={4}
        />
      </Box>
      <Box mt={4}>
        <Text>Resume (PDF or Docx):</Text>
        <Input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setResumeFile(e.target.files[0])}
        />
      </Box>
      <Link to={`/user`}>
        <Button mt={4} colorScheme="blue" onClick={handleApply}>
          Submit Application
        </Button>
      </Link>
    </Box>
  );
}

export default ApplyForm;
