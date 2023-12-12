import {
  Box,
  Avatar,
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Spacer,
  Progress,
  Stack,
  Text,
  VStack,
  Heading,
  Button,
  Grid,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import image from "../images/logo.jpg";
import VideoCards from "../components/videoCards";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useAuth } from "../context/authContext";
import { FaCheckCircle , FaHome, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMM dd", { locale: enUS });
  const {
    dailyGoalProgress,
    totalEarnings,
    claimBonus,
    bonusClaimed,
    emailLogin,
  } = useAuth();
  const navigate = useNavigate();
  const [showParabensModal, setShowParabensModal] = useState(true);
  const handleButtonClick = () => {
    navigate("/requestValue", { state: { totalEarnings, email: emailLogin  } });
  };
  const handleCloseParabensModal = () => {
    setShowParabensModal(false);
  };

  return (
    <Box background="#BFA4A4" minHeight="100vh" overflowX="hidden">
      <Modal isOpen={showParabensModal} onClose={handleCloseParabensModal}>
        <ModalOverlay />
        <ModalContent>
          <VStack>
            <ModalHeader mt={3}>Congratulations!</ModalHeader>
          </VStack>
          <ModalCloseButton />
          <VStack p={5}>
            <FaCheckCircle color="blue" style={{ marginRight: "8px" }} />
          </VStack>
          <VStack>
            <ModalBody mt={5}>
              <Text>You won ${totalEarnings} dollars!</Text>
            </ModalBody>
          </VStack>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseParabensModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        borderWidth="1px"
        borderRadius="10px"
        borderColor="gray.300"
        padding="4"
        margin="2"
        backgroundColor="white"
        boxShadow="md"
      >
        <Flex>
          <Wrap>
            <WrapItem>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Secret Tool" src={image} />
                <Box>
                  <Heading size="sm">Welcome! {emailLogin}</Heading>
                </Box>
              </Flex>
            </WrapItem>
          </Wrap>
          <Spacer />
          <Box>
            <Stat>
              <StatLabel>Collected</StatLabel>
              <StatNumber>$ {totalEarnings}</StatNumber>
              <StatHelpText>{formattedDate}</StatHelpText>
            </Stat>
          </Box>
        </Flex>
        <Box
          background="white"
          borderWidth="1px"
          borderRadius="10px"
          borderColor="gray.300"
          mt={6}
          p={4}
          m={2}
          mb={10}
          boxShadow="md"
        >
          <Stack spacing={5}>
            <Text fontSize="sm" fontWeight="bold">
              Daily goal: {dailyGoalProgress}% completed
            </Text>
            <Progress colorScheme="green" size="sm" value={dailyGoalProgress} />
          </Stack>
        </Box>
        <Box
          backgroundColor="#BFA4A4"
          borderWidth="1px"
          borderRadius="10px"
          borderColor="gray.300"
          p={4}
          m={2}
          boxShadow="md"
        >
          <Stack backgroundColor="#BFA4A4" spacing={5}>
            <VStack>
              <Button
                backgroundColor="#BFA4A4"
                fontSize="sm"
                fontWeight="bold"
                onClick={claimBonus}
                isDisabled={bonusClaimed}
              >
                {bonusClaimed
                  ? "Bonus claimed!"
                  : "Reach 100% and get a bonus of $40.0"}
              </Button>
            </VStack>
          </Stack>
        </Box>
        <VStack mt={10}>
          <Box
            backgroundColor="white"
            borderWidth="1px"
            borderRadius="10px"
            borderColor="gray.300"
            p={4}
            m={2}
            boxShadow="md"
          >
            <Stack spacing={5}>
              <Text color="BFA4A4" fontSize="sm" fontWeight="bold">
                My balance $ {totalEarnings}
              </Text>
            </Stack>
          </Box>
        </VStack>
        <VStack mt={10}>
          <Text fontSize="sm" fontWeight="bold">
            Videos
          </Text>
        </VStack>
        <VStack mt={6} spacing={4} align="stretch">
          <Box
            borderWidth="1px"
            borderRadius="10px"
            borderColor="gray.300"
            p={4}
            bg="white"
            boxShadow="md"
          >
            <VideoCards />
          </Box>
        </VStack>
      </Box>
      <Box backgroundColor="#BFA4A4" mt={6} p={4} m={2}>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <VStack>
            <Link>
              <FaHome />
            </Link>
          </VStack>
          <VStack>
            <Button backgroundColor="#BFA4A4" onClick={handleButtonClick}>
              Request Withdrawal
            </Button>
          </VStack>
          <VStack>
            <Link>
              <FaStar />
            </Link>
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
