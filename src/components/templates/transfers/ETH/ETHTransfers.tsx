import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { ethers } from "ethers";

const ETHTransfers = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [txs, setTxs] = useState([]);
  const toast = useToast();

  const startPayment = async () => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(recipient); // Validates the address

      const response = await fetch("/api/arduino_handshake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "send", recipient, amount }),
      });

      if (!response.ok) throw new Error("Transaction not approved by Arduino");

      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.utils.parseEther(amount),
      });

      setTxs([...txs, tx]);
      toast({
        title: "Transaction Submitted",
        description: `Transaction hash: ${tx.hash}`,
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Transaction Failed",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleReceive = async () => {
    try {
      const response = await fetch("/api/arduino_handshake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "receive", recipient, amount }),
      });

      if (!response.ok)
        throw new Error("Failed to receive approval from Arduino");

      toast({
        title: "Approval Received",
        description: "Arduino handshake approved. Ready to receive.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Receiving Failed",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box padding="4" maxW="md">
      <Heading mb="6">ETH Transactions</Heading>
      <VStack spacing={5} as="form" onSubmit={(e) => e.preventDefault()}>
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
        <FormControl>
          <FormLabel htmlFor="amount">Amount in ETH</FormLabel>
          <Input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </FormControl>
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={startPayment}>
            Send
          </Button>
          <Button colorScheme="green" onClick={handleReceive}>
            Receive
          </Button>
        </HStack>
      </VStack>
      {txs.length > 0 && (
        <Box mt="4">
          <Heading size="md">Transaction History</Heading>
          {txs.map((tx, index) => (
            <Text key={index}>Tx Hash: {tx.hash}</Text>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ETHTransfers;
