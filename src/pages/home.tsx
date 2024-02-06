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
import React, { useState, useEffect } from "react";
import image from "../images/logo.jpg";
// import VideoMusicList from "../components/videoMusicList";
// import VideoSportsList from "../components/videoSportsList";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useAuth } from "../context/authContext";
import { FcHome } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import VideoCards from "../components/videoCards";

export const Home: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMM dd", { locale: enUS });
  const { dailyGoalProgress, updateUserData } =
    useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any | null>(null);
  const { state } = useLocation();
  const { totalEarnings, email } = state || {};
  const [showParabensModal, setShowParabensModal] = useState(false);

  console.log(totalEarnings);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData(email);
        if (userData) {
          setUserData(userData);
          const createdAt = new Date(userData.created_at);
          const currentTime = new Date();
          const timeDifference = +currentTime - +createdAt;
          const timeDifferenceInHours = timeDifference / (1000 * 60 * 60);
          if (timeDifferenceInHours < 1) {
            setShowParabensModal(true);
          }

          localStorage.setItem("balance", userData?.balance);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [email, userData?.balance, updateUserData]);

  const getUserData = async (
    emailLogin: string | undefined
  ): Promise<any | null> => {
    try {
      if (!emailLogin) {
        console.error(emailLogin);
        return null;
      }

      const response = await axiosInstance.get(`accountByEmail/${emailLogin}`);

      if (response.status === 200 && response.data && response.data.conta) {
        return response.data.conta;
      } else {
        console.error("Resposta inválida da API:", response);
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      return null;
    }
  };

  const handleButtonClick = () => {
    navigate("/requestValue");
  };

  const handleCloseParabensModal = () => {
    setShowParabensModal(false);
  };

  return (
    <Box background="black" minHeight="100vh" overflowX="hidden">
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
              <Text>You won ${userData?.balance} dollars!</Text>
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
                  <Heading size="sm">Welcome! {userData?.email}</Heading>
                </Box>
              </Flex>
            </WrapItem>
          </Wrap>
          <Spacer />
          <Box>
            <Stat>
              <StatLabel>Collected</StatLabel>
              <StatNumber>$ {userData?.balance}</StatNumber>
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
          backgroundColor="black"
          borderWidth="1px"
          borderRadius="10px"
          borderColor="gray.300"
          p={4}
          m={2}
          boxShadow="md"
        >
          <Stack backgroundColor="black" spacing={5}>
          <VStack>
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
              <Text fontSize="sm" fontWeight="bold">
              Earn up to $40 per day!
              </Text>
            </Stack>
          </Box>
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
              <Text fontSize="sm" fontWeight="bold">
                My balance $ {userData?.balance}
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
            {/* <VideoMusicList />  */}
             <VideoCards /> 
            {/* <VideoSportsList />  */}
          </Box>
        </VStack>
      </Box>
      <Box backgroundColor="black" mt={6} p={4} m={2}>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <VStack borderRadius="10px" padding="4">
            <Link>
              <FcHome />
            </Link>
          </VStack>
          <VStack>
            <Button
              borderWidth="1px"
              borderRadius="10px"
              borderColor="gray.300"
              padding="4"
              margin="2"
              backgroundColor="white"
              boxShadow="md"
              onClick={handleButtonClick}
            >
              Request Withdrawal
            </Button>
          </VStack>
          <VStack

          >
            <Link >
              <ImStarEmpty />
            </Link>
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
