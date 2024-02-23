import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  OrderedList
} from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import image from "../images/logo.jpg";
import axiosInstance from "../utils/axiosInstance";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gainDaily, setGainDaily] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.get(`accountByEmail/${email}`);

      if (response.status === 200 && response.data && response.data.conta) {
        const { balance, ganhos_diarios, data_login } = response.data.conta;

        if (!data_login && ganhos_diarios >= 40) {
          // Limpar dados do usuário e exibir mensagem de bloqueio
          await axiosInstance.post("clear-user-data", { email });
          console.log("Usuário bloqueado. Limpeza de dados realizada.");

          // Exibir mensagem de bloqueio ao usuário
          console.log("Aguardar 24 horas para fazer login novamente.");

          return;
        }

        if (ganhos_diarios < 40) {
          // Permitir login para usuários com ganhos_diarios < 40
          login(email);
          setEmailError(false);
          localStorage.setItem("emailLogin", email);
          return navigate("/home", {
            state: { totalEarnings: balance, email },
          });
        } else {
          // Verificar se já passaram 24 horas desde o último login
          const lastLoginDate = new Date(data_login);
          const currentDate = new Date();
          const timeDifferenceInHours =
            (currentDate.getTime() - lastLoginDate.getTime()) /
            (1000 * 60 * 60);

          if (timeDifferenceInHours >= 24) {
            // Permitir login para usuários com ganhos_diarios >= 40 após 24 horas
            login(email);
            setEmailError(false);
            localStorage.setItem("emailLogin", email);
            return navigate("/home", {
              state: { totalEarnings: balance, email },
            });
          } else {
            // Exibir mensagem de bloqueio ao usuário
            console.log("Aguardar 24 horas para fazer login novamente.");
            setGainDaily(true);
            startCountdown(24 - timeDifferenceInHours);
          }
        }
      } else {
        // Registrar novo usuário
        const registerResponse = await axiosInstance.post(`registerUsers`, {
          email,
        });

        if (registerResponse.status === 200) {
          login(email);
          setEmailError(false);
          localStorage.setItem("emailLogin", email);
          navigate("/home", { state: { email } });
        } else {
          setLoginError(true);
          setEmailError(true);
          console.error(isAuthenticated);
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setLoginError(true);
      setEmailError(true);
    }
  };
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const startCountdown = (hours: number) => {
    setTimeLeft(hours * 60 * 60); // Converter horas em segundos
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // Atualizar a cada segundo
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Box p={6} rounded="md">
      <VStack>
        <FormControl onSubmit={handleLogin} justifyContent="space-between">
          <VStack>
            <Image
              borderRadius="10%"
              boxSize="100px"
              src={image}
              alt="Dan Abramov"
            />
          </VStack>
          <VStack>
            <FormLabel mt={8} mb={5}>
              Enter the email used for the purchase!
            </FormLabel>
          </VStack>
          <VStack>
            <Input
              mt={5}
              type="email"
              placeholder="Type your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor={emailError ? "red" : "gray.300"}
            />
          </VStack>
          {loginError && <Text color="red">Email only</Text>}
          <VStack>
            <Button
              type="submit"
              marginTop={6}
              backgroundColor="white"
              onClick={handleLogin}
            >
              Login
            </Button>
          </VStack>
        </FormControl>
      </VStack>
      <VStack mt={6}>
        <Button onClick={onOpen}>Terms of use</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Terms of use:</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                <OrderedList>{/* List of terms */}</OrderedList>
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={onClose} variant="ghost">
                Accept terms of use.
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
      <VStack id="showModal">
        <Modal isOpen={gainDaily} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Limit exceeded.</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              You have reached the value of $40 per day. You can log in again in{" "}
              {formatTime(timeLeft)} hours.
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setGainDaily(false)}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};

export default LoginForm;
