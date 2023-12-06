import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
  Select,
} from "@chakra-ui/react";

export const FormValue: React.FC = () => {
  return (
    <Box p={6} rounded="md">
      <VStack>
        <FormLabel mb={5}>Request Withdrawal</FormLabel>
      </VStack>
      <VStack mt={8}>
        <FormControl justifyContent="space-between">
          <VStack>
            <FormLabel mt={4} mb={5}>
              Value:
            </FormLabel>
          </VStack>
          <VStack>
            <Input mt={1} type="email" placeholder="R$" />
          </VStack>
          <VStack>
            <FormLabel mt={4} mb={5}>
             Select PIX key:
            </FormLabel>
          </VStack>
          <VStack>
            <Select>
              <option value="option1">Email</option>
              <option value="option2">CPF</option>
              <option value="option3">Telefone</option>
            </Select>
          </VStack>
          <VStack>
            <FormLabel mt={4} mb={5}>
              PIX key:
            </FormLabel>
          </VStack>
          <VStack>
            <Input mt={5} placeholder="Share your pix key" />
          </VStack>
          <VStack mt={6} mb={3}>
            <Button marginTop={6} backgroundColor="#BFA4A4">
              Request Withdrawal
            </Button>
          </VStack>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormValue;
