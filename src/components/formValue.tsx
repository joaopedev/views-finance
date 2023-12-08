import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
  Select
} from "@chakra-ui/react";
import { useAuth } from "../context/authContext";

const FormValue: React.FC = () => {
  const { totalEarnings } = useAuth();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  const [accountNumber, setAccountNumber] = useState<string>("");

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

  return (
    <Box p={6} rounded="md">
      <VStack>
        <FormControl justifyContent="space-between">
          <VStack>
            <FormLabel mt={4} mb={5}>
              Total Earnings: $ {totalEarnings}
            </FormLabel>
          </VStack>
          <VStack>
            <FormLabel mt={4} mb={5}>
              Select your payment method
            </FormLabel>
          </VStack>
          <VStack>
            <Select mt={4} onChange={handlePaymentMethodChange}>
              <option value="paypal">PayPal</option>
              <option value="wise">Wise</option>
              <option value="skrill">Skrill</option>
              <option value="bankTransfer">Direct Bank Transfers</option>
            </Select>
          </VStack>
          <VStack>
            <FormLabel mt={4} mb={5}>
              Enter your account:
            </FormLabel>
          </VStack>
          <VStack>
            {selectedPaymentMethod === "paypal" && (
              <Input
                mt={2}
                placeholder="Enter your PayPal email"
                onChange={handleAccountNumberChange}
              />
            )}
            {selectedPaymentMethod === "wise" && (
              <Input
                mt={2}
                placeholder="Enter your Wise account number"
                onChange={handleAccountNumberChange}
              />
            )}
            {selectedPaymentMethod === "skrill" && (
              <Input
                mt={2}
                placeholder="Enter your Skrill email"
                onChange={handleAccountNumberChange}
              />
            )}
            {selectedPaymentMethod === "bankTransfer" && (
              <Input
                mt={2}
                placeholder="Enter your bank account number"
                onChange={handleAccountNumberChange}
              />
            )}
          </VStack>
          <VStack mt={6} mb={3}>
            <Button marginTop={6} backgroundColor="#BFA4A4">
              Send!
            </Button>
          </VStack>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormValue;
