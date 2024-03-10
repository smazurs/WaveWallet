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

// Assuming you have the token's ABI. For the transfer function, it often looks like this:
const tokenAbiFragment = [
  "function transfer(address to, uint256 amount) returns (bool)",
];

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
      // Ensure MetaMask is connected and user's account is accessible
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const fromAddress = accounts[0]; // The first account is usually the user's primary account

      // Token contract address and user's account address
      const tokenAddress = "YOUR_ERC20_TOKEN_CONTRACT_ADDRESS";
      const tokenContract = new ethers.Contract(
        tokenAddress,
        tokenAbiFragment,
        new ethers.providers.Web3Provider(window.ethereum)
      );

      // Encode the transaction to call the transfer function of the ERC20 token contract
      const txData = tokenContract.interface.encodeFunctionData("transfer", [
        recipient,
        ethers.utils.parseUnits(amount, "18"),
      ]);

      // Send transaction through MetaMask
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: fromAddress,
            to: tokenAddress,
            data: txData,
          },
        ],
      });

      toast({
        title: "Transaction Submitted",
        description: `Transaction hash: ${txHash}`,
        status: "info",
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
