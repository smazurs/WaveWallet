import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Welcome to wavewallet
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Moralis authentication
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display Transaction History
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Send and recieve ETH
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ETH balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          MetaMask integration
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Using Moralis from client-side
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
