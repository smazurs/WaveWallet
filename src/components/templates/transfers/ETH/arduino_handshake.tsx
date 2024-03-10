// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Heading,
//   useToast,
//   VStack,
//   Text,
//   HStack,
// } from "@chakra-ui/react";
// import { ethers } from "ethers";

// // Component for handling ETH transfers with Arduino handshake verification
// const ETHTransfers = () => {
//   // State variables for recipient address, amount to be sent, and transactions history
//   const [recipient, setRecipient] = useState("");
//   const [amount, setAmount] = useState("");
//   const [txs, setTxs] = useState([]);

//   // Chakra UI toast for showing notifications
//   const toast = useToast();

//   // Function to initiate payment after Arduino handshake confirmation
//   const startPayment = async () => {
//     try {
//       // Checks if the Ethereum provider (MetaMask) is available
//       if (!window.ethereum)
//         throw new Error("No crypto wallet found. Please install it.");

//       // Requests access to the user's account
//       await window.ethereum.send("eth_requestAccounts");
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();

//       // Validates the recipient address format
//       ethers.utils.getAddress(recipient);

//       // Makes a POST request to the backend to check for Arduino handshake approval
//       const response = await fetch("/api/arduino_handshake", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ action: "send", recipient, amount }),
//       });

//       // Throws an error if the handshake was not approved
//       if (!response.ok) throw new Error("Transaction not approved by Arduino");

//       // If approved, proceeds to send ETH to the recipient
//       const tx = await signer.sendTransaction({
//         to: recipient,
//         value: ethers.utils.parseEther(amount),
//       });

//       // Updates the transaction history and shows a success notification
//       setTxs([...txs, tx]);
//       toast({
//         title: "Transaction Submitted",
//         description: `Transaction hash: ${tx.hash}`,
//         status: "info",
//         duration: 9000,
//         isClosable: true,
//       });
//     } catch (err) {
//       // Catches and logs any errors, shows an error notification
//       console.error(err);
//       toast({
//         title: "Transaction Failed",
//         description: err.message,
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//   };

//   // Function to handle the receiving process (listening for Arduino confirmation)
//   const handleReceive = async () => {
//     try {
//       // Similar to startPayment but with action set to 'receive'
//       const response = await fetch("/api/arduino_handshake", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ action: "receive", recipient, amount }),
//       });

//       // Checks for Arduino approval for receiving
//       if (!response.ok)
//         throw new Error("Failed to receive approval from Arduino");

//       // Shows a success notification on receiving Arduino handshake approval
//       toast({
//         title: "Approval Received",
//         description: "Arduino handshake approved. Ready to receive.",
//         status: "success",
//         duration: 9000,
//         isClosable: true,
//       });
//     } catch (err) {
//       // Catches and logs any errors, shows an error notification
//       console.error(err);
//       toast({
//         title: "Receiving Failed",
//         description: err.message,
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//   };

//   // UI components for entering transaction details, sending, and receiving
//   return (
//     <Box padding="4" maxW="md">
//       <Heading mb="6">Send ETH</Heading>
//       <VStack spacing={5} as="form" onSubmit={(e) => e.preventDefault()}>
//         <FormControl>
//           <FormLabel htmlFor="recipient">Recipient Address</FormLabel>
//           <Input
//             id="recipient"
//             type="text"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//             placeholder="Enter recipient address"
//           />
//         </FormControl>
//         <FormControl>
//           <FormLabel htmlFor="amount">Amount in ETH</FormLabel>
//           <Input
//             id="amount"
//             type="text"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount"
//           />
//         </FormControl>
//         <HStack spacing={4}>
//           <Button colorScheme="blue" onClick={startPayment}>
//             Send
//           </Button>
//           <Button colorScheme="green" onClick={handleReceive}>
//             Receive
//           </Button>
//         </HStack>
//       </VStack>
//       {txs.length > 0 && (
//         <Box mt="4">
//           <Heading size="md">Transaction History</Heading>
//           {txs.map((tx, index) => (
//             <Text key={index}>Tx Hash: {tx.hash}</Text>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ETHTransfers;
