import { CheckCircleIcon } from '@chakra-ui/icons';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Heading,
  VStack,
  List,
  Link,
  ListItem,
  ListIcon,
  ChakraProvider,
  useColorMode,
} from '@chakra-ui/react';

const links = {
  github: 'https://github.com/smazurs/wavewallet/',
};

const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <>
    <ChakraProvider>
      {/* Header Section */}
      <VStack
        align="center"
        spacing={8}
        p={8}
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        color={colorMode === 'light' ? 'black' : 'white'}
      >
        <Heading size="3xl" textAlign="center">
          Welcome to WaveWallet!
        </Heading>
        <Heading size="lg" textAlign="center">
          Securing Your Crypto transactions with RF Authentication.
        </Heading>
          <Heading size="sm" textAlign="center">
            Check out the code for {' '}
            <Link href={links.github} isExternal alignItems={'center'}>
              WaveWallet <ExternalLinkIcon />
            </Link>
          </Heading>
        </VStack>

      {/* Main Content Section */}
      <VStack
        align="start"
        spacing={6}
        p={8}
        borderRadius="md"
        boxShadow="lg"
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        color={colorMode === 'light' ? 'black' : 'white'}
        maxW="500px"
        mx="auto"
      >
        <List spacing={3}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {feature}
            </ListItem>
          ))}
        </List>
      </VStack>
    </ChakraProvider>
    </>
  );
};

const features = [
  'Display Transaction History',
  'Send and receive ETH',
  'Send and receive NFTs',
  'Display ETH balances',
  'Display NFT balances',
  'MetaMask integration',
  'Moralis authentication',
];

export default Home;
