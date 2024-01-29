import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
  Select,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Modal,
  ModalCloseButton,
  Text,
  ModalHeader,
  ModalBody,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  Spacer,
} from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import { useLocation } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const FormValue: React.FC = () => {
  const {
    updateTotalEarnings,
    showInsufficientModal,
    setShowInsufficientModal,
    emailLogin: contextEmailLogin,
  } = useAuth();

  const location = useLocation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [showEmailSentModal, setShowEmailSentModal] = useState(false);
  const [initialTotalEarnings, setInitialTotalEarnings] = useState<
    number | undefined
  >(undefined);

  const emailLogin = localStorage.getItem("emailLogin") || contextEmailLogin;
  const balance = localStorage.getItem("balance") || "0";

  const handleAccountNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccountNumber(event.target.value);
  };

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSendClick = async () => {
    try {
      const totalEarnings = parseFloat(localStorage.getItem("balance") || "0");

      console.log("Before API Call - totalEarnings:", totalEarnings);

      if (totalEarnings < 1500) {
        setShowInsufficientModal(true);
        return;
      }

      const response = await axiosInstance.post(`${apiUrl}enviar-email`, {
        usuario: emailLogin,
        valorDeSaque: totalEarnings,
        modeloSaque: selectedPaymentMethod,
        contaDeSaque: accountNumber,
      });

      console.log("After API Call - totalEarnings:", totalEarnings);

      setShowEmailSentModal(true);
      response && response.status === 200 && updateTotalEarnings(0);

      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  useEffect(() => {
    if (location.state && location.state.totalEarnings !== undefined) {
      setInitialTotalEarnings(location.state.totalEarnings);
      updateTotalEarnings(location.state.totalEarnings);
    }
  }, [location.state, updateTotalEarnings]);

  useEffect(() => {
    if (showInsufficientModal) {
      // Alguma lógica aqui se necessário
    }
  }, [showInsufficientModal]);

  return (
    <Box p={6} rounded="md">
      <Modal
        isOpen={showEmailSentModal}
        onClose={() => setShowEmailSentModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={3}>Congratulations!</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={5}>
            <Text>Your withdrawal request has been sent successfully!</Text>
            <Text>You will receive your values within 15 days.</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => setShowEmailSentModal(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Modal
          isOpen={showInsufficientModal}
          onClose={() => setShowInsufficientModal(false)}
        >
          {
            "You can only request your amount when you obtain the amount of $1500."
          }
        </Modal>
      </Box>
      <VStack>
        <FormControl justifyContent="space-between">
          <VStack>
            <FormLabel mt={4} mb={5}>
              Request your value:
            </FormLabel>
          </VStack>
          <VStack>
            <FormLabel>
              {"Your value $:"}
              {initialTotalEarnings !== undefined
                ? initialTotalEarnings
                : parseFloat(balance)}
            </FormLabel>
            <Spacer />
            <NumberInput
              defaultValue={
                initialTotalEarnings !== undefined
                  ? initialTotalEarnings
                  : parseFloat(balance)
              }
              precision={2}
              step={0.2}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
          <VStack>
            <FormLabel mt={4} mb={5}>
              Select your payment method
            </FormLabel>
          </VStack>
          <VStack>
            <Select mt={4} onChange={handlePaymentMethodChange}>
              <option value="Paypal">PayPal</option>
              <option value="Wise">Wise</option>
              <option value="Skrill">Skrill</option>
              <option value="BankTransfer">Direct Bank Transfers</option>
            </Select>
          </VStack>
          <VStack>
            <FormLabel mt={4} mb={5}>
              Enter your account:
            </FormLabel>
          </VStack>
          <VStack>
            {selectedPaymentMethod === "Paypal" && (
              <Input
                mt={2}
                placeholder="Enter your PayPal email"
                onChange={handleAccountNumberChange}
              />
            )}
            {selectedPaymentMethod === "Wise" && (
              <Input
                mt={2}
                placeholder="Enter your Wise account number"
                onChange={handleAccountNumberChange}
              />
            )}
            {selectedPaymentMethod === "Skrill" && (
              <Input
                mt={2}
                placeholder="Enter your Skrill email"
                onChange={handleAccountNumberChange}
              />
            )}
            {selectedPaymentMethod === "BankTransfer" && (
              <Input
                mt={2}
                placeholder="Enter your bank account number"
                onChange={handleAccountNumberChange}
              />
            )}
          </VStack>
          <VStack mt={6} mb={3}>
            <Button
              marginTop={6}
              backgroundColor="white"
              onClick={handleSendClick}
            >
              Send!
            </Button>
          </VStack>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormValue;
