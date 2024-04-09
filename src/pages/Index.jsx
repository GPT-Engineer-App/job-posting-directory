import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Stack, Grid, Image, Link } from "@chakra-ui/react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Acme Inc.",
    location: "San Francisco, CA",
    description: "We are seeking a skilled software engineer to join our team.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Tech Corp.",
    location: "New York, NY",
    description: "We are looking for an experienced product manager to lead our new project.",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Innovate Ltd.",
    location: "London, UK",
    description: "We are hiring a creative UX designer to enhance our user experience.",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Job Posting and Directory
      </Heading>
      <Stack direction="row" mb={8}>
        <Input placeholder="Search jobs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="blue">
          Search
        </Button>
      </Stack>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {filteredJobs.map((job) => (
          <Box key={job.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={`https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0Jqb2IuY29tcGFueSU3RCUyMGxvZ298ZW58MHx8fHwxNzEyNjc5NDI3fDA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`${job.company} logo`} mb={4} />
            <Heading as="h2" size="md" mb={2}>
              {job.title}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              <FaBriefcase /> {job.company}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={4}>
              <FaMapMarkerAlt /> {job.location}
            </Text>
            <Text mb={4}>{job.description}</Text>
            <Link href={`/job/${job.id}`} color="blue.500">
              View Details
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
