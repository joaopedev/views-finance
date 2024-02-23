import React, { useState } from "react";
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
  OrderedList,
  ListItem,
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

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.get(`accountByEmail/${email}`);

      if (response.status === 200 && response.data && response.data.conta) {
        const { balance, ganhos_diarios, data_login } = response.data.conta;

        if (data_login && ganhos_diarios >= 40) {
          const lastLoginDate = new Date(data_login);
          const currentDate = new Date();
          const timeDifferenceInHours =
            (currentDate.getTime() - lastLoginDate.getTime()) /
            (1000 * 60 * 60);

          if (timeDifferenceInHours >= 24) {
            console.log("Limpar dados de login e ganhos diários"); // Apenas para depuração
          }
        }

        login(email);
        setEmailError(false);
        localStorage.setItem("emailLogin", email);

        if (ganhos_diarios <= 40) {
          return navigate("/home", {
            state: { totalEarnings: balance, email },
          });
        }
        setGainDaily(true);
      } else {
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
          console.error(registerResponse.data.message, isAuthenticated);
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setLoginError(true);
      setEmailError(true);
    }
  };

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
                <OrderedList>
                  <ListItem>
                    <strong>Terms</strong> By accessing the Secret Tool website,
                    you agree to comply with these terms of service, all
                    applicable laws and regulations, and acknowledge that you
                    are responsible for complying with all applicable local
                    laws. If you do not agree with any of these terms, you are
                    prohibited from using or accessing this site.
                  </ListItem>
                  <ListItem>
                    <strong>License to Use</strong> Permission is granted to
                    temporarily download a copy of the materials (information or
                    software) on the Secret Tool website for personal,
                    non-commercial viewing only. This is the grant of a license,
                    not a transfer of title, and under this license, you may
                    not:
                    <OrderedList ml={4}>
                      <ListItem>modify or copy the materials;</ListItem>
                      <ListItem>
                        use the materials for any commercial purpose or for
                        public display (commercial or non-commercial);
                      </ListItem>
                      <ListItem>
                        attempt to decompile or reverse engineer any software
                        contained on the Secret Tool website;
                      </ListItem>
                      <ListItem>
                        remove any copyright or other proprietary notations from
                        the materials; or
                      </ListItem>
                      <ListItem>
                        transfer the materials to another person or 'mirror' the
                        materials on any other server.
                      </ListItem>
                    </OrderedList>
                    This license will automatically terminate if you violate any
                    of these restrictions and may be terminated by Secret Tool
                    at any time. Upon terminating your viewing of these
                    materials or upon the termination of this license, you must
                    destroy any downloaded materials in your possession, whether
                    in electronic or printed format.
                  </ListItem>
                  <ListItem>
                    <strong>Disclaimer</strong> The materials on the Secret Tool
                    website are provided 'as is'. Secret Tool makes no
                    warranties, expressed or implied, and hereby disclaims and
                    negates all other warranties, including, without limitation,
                    implied warranties or conditions of merchantability, fitness
                    for a particular purpose, or non-infringement of
                    intellectual property or other violation of rights.
                    Furthermore, Secret Tool does not warrant or make any
                    representations concerning the accuracy, likely results, or
                    reliability of the use of the materials on its website or
                    otherwise relating to such materials or on any sites linked
                    to this site.
                  </ListItem>
                  <ListItem>
                    <strong>Limitations</strong> In no event shall Secret Tool
                    or its suppliers be liable for any damages (including,
                    without limitation, damages for loss of data or profit, or
                    due to business interruption) arising out of the use or
                    inability to use the materials on Secret Tool, even if
                    Secret Tool or a Secret Tool authorized representative has
                    been notified orally or in writing of the possibility of
                    such damage. Because some jurisdictions do not allow
                    limitations on implied warranties, or limitations of
                    liability for consequential or incidental damages, these
                    limitations may not apply to you.
                  </ListItem>
                  <ListItem>
                    <strong>Accuracy of Materials</strong> The materials
                    displayed on the Secret Tool website may include technical,
                    typographical, or photographic errors. Secret Tool does not
                    warrant that any material on its website is accurate,
                    complete, or current. Secret Tool may make changes to the
                    materials contained on its website at any time without
                    notice. However, Secret Tool does not make any commitment to
                    update the materials.
                  </ListItem>
                  <ListItem>
                    <strong>Links</strong> Secret Tool has not reviewed all of
                    the sites linked to its website and is not responsible for
                    the contents of any such linked site. The inclusion of any
                    link does not imply endorsement by Secret Tool of the site.
                    Use of any linked site is at the user's own risk.
                  </ListItem>
                  <ListItem>
                    <strong>Modifications</strong> Secret Tool may revise these
                    website terms of service at any time without notice. By
                    using this website, you agree to be bound by the current
                    version of these terms of service.
                  </ListItem>
                  <ListItem>
                    <strong>Applicable Law</strong> These terms and conditions
                    are governed and interpreted in accordance with the laws of
                    Secret Tool, and you irrevocably submit to the exclusive
                    jurisdiction of the courts in that state or locality.
                  </ListItem>
                </OrderedList>
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
              You have reached the value of $40 per day, your return will only
              be allowed 24 hours after your last earnings.
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
