import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        WaveWallet
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Moralis authentication
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display Transactions
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 balances
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
          Multichain Support
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
