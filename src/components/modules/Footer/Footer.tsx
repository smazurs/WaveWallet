import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/smazurs/wavewallet/',
  forum: 'https://forum.moralis.io/',
  moralis: 'https://moralis.io/?utm_source=wavewallethosted&utm_medium=todo&utm_campaign=wavewallet',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        ⭐️ Please star this{' '}
        <Link href={links.github} isExternal alignItems={'center'}>
          WaveWallet <ExternalLinkIcon />
        </Link>
        , every star makes us very happy!
      </Text>
      <Text>
      Crypto Confidence, Unleashed by Waves: RF Authentication for Trustworthy Transactions. WAVEWALLET 2024™
      </Text>
    </Box>
  );
};

export default Footer;
