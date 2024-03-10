import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { ethers } from "ethers";

const SendERC20Token = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const sendToken = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask is not installed",
        description: "Please install MetaMask to use this feature.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      const tokenAddress = "YOUR_TOKEN_CONTRACT_ADDRESS";
      const tokenABI = [
        // Insert the ABI of your ERC20 Token Contract here
        "function transfer(address to, uint amount) returns (bool)",
      ];

      const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
      const tx = await tokenContract.transfer(
        recipient,
        ethers.utils.parseUnits(amount, "ether")
      );

      await tx.wait();

      toast({
        title: "Transaction Successful",
        description: `Tokens sent successfully! Transaction Hash: ${tx.hash}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Transaction Failed",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box padding="4" maxW="md">
      <Heading mb="6">Send ERC20 Token</Heading>
      <FormControl>
        <FormLabel htmlFor="recipient">Recipient Address</FormLabel>
        <Input
          id="recipient"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient address"
        />
      </FormControl>
      <FormControl mt="4">
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <Input
          id="amount"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </FormControl>
      <Button mt="4" colorScheme="blue" onClick={sendToken}>
        Send Token
      </Button>
    </Box>
  );
};

export default SendERC20Token;
