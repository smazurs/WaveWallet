import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  Text
  } from '@chakra-ui/react';
import { ethers } from 'ethers';

const SendNFT = () => {
  const [recipient, setRecipient] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [nftDetails, setNftDetails] = useState(null);
  const toast = useToast();

  const fetchNFTDetails = async () => {
    // Placeholder function to fetch NFT details
    // You might want to replace this with actual logic to query your smart contract or an API
    setNftDetails({
      name: "NFT Name",
      imageUrl: "https://example.com/nft.jpg",
      description: "NFT Description",
    });
  };

  const sendNFT = async () => {
    if (!window.ethereum) {
      toast({
        title: 'MetaMask is not installed',
        description: "Please install MetaMask to use this feature.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    if (!recipient || !tokenId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      const nftAddress = "YOUR_NFT_CONTRACT_ADDRESS";
      const nftABI = [
        // Insert the ABI of your NFT Contract here
        "function safeTransferFrom(address from, address to, uint256 tokenId)",
      ];

      const nftContract = new ethers.Contract(nftAddress, nftABI, signer);
      const tx = await nftContract.safeTransferFrom(
        await signer.getAddress(),
        recipient,
        tokenId
      );

      await tx.wait();

      toast({
        title: 'Transaction Successful',
        description: `NFT sent successfully! Transaction Hash: ${tx.hash}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Transaction Failed',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box padding="4" maxW="md">
      <Heading mb="6">Send NFT</Heading>
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
        <FormLabel htmlFor="tokenId">Token Id</FormLabel>
        <Input
          id="tokenId"
          type="text"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          onBlur={fetchNFTDetails}
          placeholder="Enter token id"
        />
      </FormControl>
      {nftDetails && (
        <Box mt="4">
          <Text fontWeight="bold">NFT Details:</Text>
          <Text>Name: {nftDetails.name}</Text>
          <Text>Description: {nftDetails.description}</Text>
          {/* Display NFT image if available */}
          {nftDetails.imageUrl && (
            <Box mt="2">
              <img
                src={nftDetails.imageUrl as string} // Add type assertion here
                alt="NFT preview"
                style={{ maxWidth: "100px" }}
              />
            </Box>
          )}
        </Box>
      )}
      <Button mt="4" colorScheme="blue" onClick={sendNFT}>
        Send NFT
      </Button>
    </Box>
  );
};

export default SendNFT;